using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentManagementAPI.Models;

namespace StudentManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentsController : ControllerBase
    {
        private readonly StudentDb1Context _context;

        public StudentsController(StudentDb1Context context)
        {
            _context = context;
        }

        [HttpGet]
        public IActionResult GetStudents()
        {
            try
            {
                var students = _context.Students.ToList();
                return Ok(students);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetStudent(int id)
        {
            try
            {
                var student = _context.Students.Find(id);
                if (student == null)
                    return NotFound($"Student with ID {id} not found.");

                return Ok(student);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public IActionResult AddStudent([FromBody] Student student)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                _context.Students.Add(student);
                _context.SaveChanges();
                return CreatedAtAction(nameof(GetStudent), new { id = student.Id }, student);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error adding student: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public IActionResult UpdateStudent(int id, [FromBody] Student updated)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            try
            {
                var student = _context.Students.Find(id);
                if (student == null)
                    return NotFound($"Student with ID {id} not found.");

                student.Name = updated.Name;
                student.Age = updated.Age;
                student.Grade = updated.Grade;
                student.Email = updated.Email;
                student.Department = updated.Department;

                _context.SaveChanges();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error updating student: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteStudent(int id)
        {
            try
            {
                var student = _context.Students.Find(id);
                if (student == null)
                    return NotFound($"Student with ID {id} not found.");

                _context.Students.Remove(student);
                _context.SaveChanges();
                return NoContent();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Error deleting student: {ex.Message}");
            }
        }
    }
}
