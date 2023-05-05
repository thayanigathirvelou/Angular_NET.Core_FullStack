using Microsoft.EntityFrameworkCore;
using WebApplication4.ContactsAPI;








var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<ContactsAPIDbContext>(option => 
    option.UseSqlServer(builder.Configuration.GetConnectionString("DataConnectionString")));

//builder.Services.AddCors(options =>
//{
//    options.AddPolicy("Alloworigin",
//                      policy =>
//                      {
//                          policy.WithOrigins("http://localhost:4200/");
//                      });
//});

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngularOrigins",
    builder =>
    {
        builder.WithOrigins(
                            "http://localhost:4200"
                            )
                            .AllowAnyHeader()
                            .AllowAnyMethod();
    });
});



var app = builder.Build();
app.UseCors("AllowAngularOrigins");


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
