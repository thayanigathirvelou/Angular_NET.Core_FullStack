using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication4.ContactsAPI;
using WebApplication4.model;

namespace WebApplication4.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {

        private ContactsAPIDbContext dbContext;
        public ContactsController(ContactsAPIDbContext dbContext)
        {
            this.dbContext = dbContext;
        }

        [HttpGet]
        public async Task<IActionResult> GetContacts()
        {
            return Ok(await dbContext.Students.ToListAsync());
        }

        [HttpGet("{StudentId}")]
        public async Task<IActionResult> GetContactsById([FromRoute] int StudentId)
        {
            var contact = await dbContext.Students.FindAsync(StudentId);
            return Ok(contact);
        }


        [HttpPost]
        public async Task<IActionResult> AddContact(Student addContactRequest)
        {
            var students = new Student()
            {
                StudentId = addContactRequest.StudentId,
                FullName = addContactRequest.FullName,
                Class = addContactRequest.Class
            };
            await dbContext.Students.AddAsync(students);
            await dbContext.SaveChangesAsync();
            return Ok(students);
        }


        [HttpPut("{StudentId}")]
        public async Task<IActionResult> UpdateContact([FromRoute] int StudentId, Student updateContactRequest)
        {
            var contact = await dbContext.Students.FindAsync(StudentId);
            if (contact != null)
            {
                contact.FullName = updateContactRequest.FullName;
                contact.Class = updateContactRequest.Class;                
                await dbContext.SaveChangesAsync();
                return Ok(contact);
            }
            return NotFound();
        }

        [HttpDelete("{StudentId}")]

        public async Task<IActionResult> DeleteContact(int StudentId)
        {
            var contact = await dbContext.Students.FindAsync(StudentId);
            if (contact != null)
            {
                dbContext.Remove(contact);
                dbContext.SaveChanges();
                return Ok(contact);
            }
            return NotFound();
        }
    }
}
