package com.example.SpringProject1.Service;

import com.example.SpringProject1.Entity.Employee;
import com.example.SpringProject1.Repository.EmployeeRepo;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class EmployeeService {
    private final EmployeeRepo employeeRepo;
    public Employee postEmployee(Employee employee){
        return employeeRepo.save(employee);
    }

    public List<Employee> getAllEmployees(){
        return employeeRepo.findAll();
    }

    public void deleteEmployee(int id){
        if(!employeeRepo.existsById(id)){
            throw new EntityNotFoundException("Employee with ID " + id + " not found");
        }
        employeeRepo.deleteById(id);

    }

    public Employee getEmployeeByID(int id){
        return employeeRepo.findById(id).orElse(null);
    }

    public  Employee updateEmployee(int id, Employee employee){
        Optional<Employee> employeeOptional = employeeRepo.findById(id);
        if(employeeOptional.isPresent()){
            Employee existingEmployee = employeeOptional.get();
            existingEmployee.setName(employee.getName());
            existingEmployee.setEmail(employee.getEmail());
            existingEmployee.setPhone(employee.getPhone());
            existingEmployee.setDepartment(employee.getDepartment());
            return employeeRepo.save(existingEmployee);
        }
        return null;
    }

}
