using System;
using System.Collections.Generic;

namespace StudentManagementAPI.Models;

public partial class Student
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int Age { get; set; }

    public string Grade { get; set; } = null!;

    public string Email { get; set; } = null!;

    public string Department { get; set; } = null!;
}
