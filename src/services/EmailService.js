import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "http://localhost:8080/sendemail";

class EmailService {
        
    sendMailEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }
}
export default new EmailService()
