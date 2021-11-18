import axios from 'axios';

const AIPROJECT_API_BASE_URL = "http://localhost:8080/api/ai1/aiproject";
const JVPROJECT_API_BASE_URL = "http://localhost:8080/api/jv1/jvproject";
const PYPROJECT_API_BASE_URL = "http://localhost:8080/api/py1/pyproject";
const DSPROJECT_API_BASE_URL = "http://localhost:8080/api/ds1/dsproject";
class ProjectService{
    getaiEmployees(){
        return axios.get(AIPROJECT_API_BASE_URL);
    }
    getdsEmployees(){
        return axios.get(DSPROJECT_API_BASE_URL);
    }
    getjvEmployees(){
        return axios.get(JVPROJECT_API_BASE_URL);
    }
    getpyEmployees(){
        return axios.get(PYPROJECT_API_BASE_URL);
    }
}
export default new ProjectService()