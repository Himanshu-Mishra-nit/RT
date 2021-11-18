import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/api/i1/interns";
const EMPLOYEE_API_BASE_URL_JAVA = "http://localhost:8080/api/i1/python";
const EMPLOYEE_API_BASE_URL_PYTHON = "http://localhost:8080/api/i1/java";
const EMPLOYEE_API_BASE_URL_AI = "http://localhost:8080/api/i1/ai";
const EMPLOYEE_API_BASE_URL_DS = "http://localhost:8080/api/i1/datascience";
const EMPLOYEE_API_BASE_URL_LEAVE = "http://localhost:8080/api/i1/leave";


class InternshipService {
    getCountEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL+'/count');
    } 
    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
    getCountJavaEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_JAVA+'/count');
    }  
    getCountPythonEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_PYTHON+'/count');
    }  
    getCountDataScienceEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_DS+'/count');
    } 
    getCountAiEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_AI+'/count');
    } 
    getJavaEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_JAVA);
    }  
    getPythonEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_PYTHON);
    }  
    getDataScienceEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_DS);
    } 
    getAiEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_AI);
    }  
    getLeaveEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL_LEAVE);
    }    

   SetEmployee(employee){
      
    return axios.post(EMPLOYEE_API_BASE_URL, employee);
   }
   SetJavaEmployee(employee){
    console.log(employee);
 return axios.post(EMPLOYEE_API_BASE_URL_JAVA, employee);
}
SetPythonEmployee(employee){
    console.log(employee);
 return axios.post(EMPLOYEE_API_BASE_URL_PYTHON, employee);
}
SetAiEmployee(employee){
    console.log(employee);
 return axios.post(EMPLOYEE_API_BASE_URL_AI, employee);
}
SetDataScienceEmployee(employee){
    console.log(employee);
 return axios.post(EMPLOYEE_API_BASE_URL_DS, employee);
}
SetLeaveEmployee(employee){
    console.log("akki sharma"+employee);
    console.log(employee);
 return axios.post(EMPLOYEE_API_BASE_URL_LEAVE, employee);
}
deleteEmployee(employeeId){
    return axios.delete(EMPLOYEE_API_BASE_URL_LEAVE + '/' + employeeId);
}
}
export default new InternshipService()