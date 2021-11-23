import React, { Component } from 'react'
import {Button,Form} from 'react-bootstrap'
import EmployeeService from '../services/EmployeeService'
import EmailService from '../services/EmailService'
import 'bootstrap/dist/css/bootstrap.css';

export default class MessageComponent extends Component {
    constructor(props) {
        super(props)
        console.log('i am here');
        this.state = {
                 checkmail: new Set(),
                 employees: [],
                 subject:'',
                 text:'',
                 EmailIdList: '',
                 checked: false ,
                
                 check: false,
                 emailList: '',
                 EmailList: [],
                 stringArray: []

                }
       // this.SelectEmployee = this.SelectEmployee.bind(this);
       this.addMail=this.addMail.bind(this);
       this.removeMail=this.removeMail.bind(this);
       this.changeEmailHandler = this.changeEmailHandler.bind(this);
       this.changeSubjectHandler = this.changeSubjectHandler.bind(this);
       this.changeTextHandler = this.changeTextHandler.bind(this);
       this.sendMail = this.sendMail.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChange1 = this.handleChange1.bind(this);
        this.handleCheckChieldElement = this.handleCheckChieldElement.bind(this);
        this.handleSeti=this.handleSeti.bind(this);
    }
    addMail(item)
    {
        console.log("item"+item)
        this.setState(({checkmail})=>({
            checkmail: new Set(checkmail).add(item)
        }));
        console.log("chechmail"+this.state.checkmail.getEmployees)
    }
    removeMail(item)
    {
        this.setState(({checkmail})=>{
            const newchecked=new Set(checkmail);
            newchecked.delete(item);
          return{
              checkmail:newchecked
          };
        });
    }
    mailstatus(item){
        return this.state.checkmail.has(item);
    }
    componentDidMount(){
        EmployeeService.getEmployees().then((res) => {
            this.setState({ employees: res.data});
        });
    }
    changeEmailHandler(event){
        this.setState({EmailList: event.target.value});
    }
    changeSubjectHandler(event){
        this.setState({subject: event.target.value});
    }
    changeTextHandler(event){
        this.setState({text: event.target.value});

    }
    sendMail(e){
        e.preventDefault();
        let sendMailemployee = {to: this.state.stringArray, subject: this.state.subject, text: this.state.text};
        console.log('employee => ' + JSON.stringify(sendMailemployee));
        EmailService.sendMailEmployee(sendMailemployee).then(res =>{
            this.props.history.push('/employees');
        });
    }
    handleChange() {
        this.setState({
                checked: !this.state.checked 
         })
        if(!this.state.checked)
        {
            this.setState({
                EmailIdList:this.state.employees.map(employee=>employee.emailId)
               
            

            });
            console.log(this.state.EmailIdList);

        }
        else{
            console.log('Empty');

        }
        
      }
      handleChange1(e) {
          let check=e.target.check
         
        this.setState({
                check: !this.state.check
          })
          if(!this.state.check)
          {
            console.log('true')
          }
          else{
              console.log('false')
          }
        if(!this.state.check)
        {
            this.setState({
                  EmailIdList:e.target.value
                // EmailIdList.concat('akki')
                //EmailIdList: this.state.EmailidList.concat(this.state.check)
                //EmailIdList:this.state.employees.map(employee=>employee.emailId)

            })
            console.log(this.state.EmailIdList);

        }
        else{
            this.setState({
                EmailIdList:''
            })
            console.log('Empty');

        }
        
      }
      handleSeti=(event)=>{
        let chek=event.target.check 
        console.log(event.target.value+"   "+ event.target.check)
        if(this.mailstatus(event.target.value)===true)
        { 
            this.removeMail(event.target.value)
            console.log("trueee")

        }
        else
        {
            this.addMail(event.target.value)
            console.log("set"+this.state.checkmail)
             
              console.log("falseeeee")
        }
        this.setState({
            stringArray:[...this.state.checkmail]
        })
        console.log("Array"+ this.state.stringArray)
      }
      handleCheckChieldElement = (event) => {
        this.setState({
            check: !this.state.check
       })
        if(!this.state.check)
        {
            let emaillist = this.state.emailList;
           // emaillist.push(event.target.value)
            this.setState({emailList: emaillist})
          console.log('true'+this.state.check +""+event.target.check+''+emaillist)
        }
        else{
            let emaillist = this.state.emailList;
            // emaillist.pop(event.target.value)
            this.setState({emailList: ''})
            console.log('false'+this.state.check+""+event.target.check+''+emaillist)
        } 
       //let emaillist = this.state.emailList;
        //let emaillist: this.state.emailList.concat('new value')
         //       emaillist.push(event.target.value)
       // emaillist.forEach(fruite => {
         //  if (fruite.value === event.target.value)
           //   fruite.isChecked =  event.target.checked
       // })
      // console.log('Empty11'+emaillist);
       // if(!event.target.check){
         //  this.setState({emailList: emaillist})
          // console.log('Empty22'+this.state.emailList);
       // }
       // else{
         //  let email=
          //  console.log('Empty33');      
        //}  
      }
      handleSet(e) {
        this.setState({text: e.target.value});
    }  
    addEmployee =()=>{
        {//this.setState({EmailIdList: this.state.EmailidList.concat(this.state.input)});
        }
        this.setState({EmailIdList: this.state.EmailidList});
        };
   
    render() {
        
        return (
            <div className='container'>
                 <div className = "row">
                    <div className = "col" style={{width:'500px',backgroundColor: 'snow',borderRadius:'10px',marginTop:"10px",marginBottom:"20px",marginLeft:'20px',marginRight:'20px'}}>
                        <h3 className="text-center"style={{marginTop:'10px'}}>Select mail</h3>
                    <div className = "card-body" >
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Employee </th>
                                    <th>Email Id</th>
                                    <th>
                                    <label>select_ </label>
                                  {//  <input type="checkbox" id="chk1"className="chk11" checked={ this.state.checked } onChange={ this.handleChange } />
                                   }     
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.employees.map(
                                        employee => 
                                        <tr key = {employee.id}>
                                             <td> { employee.firstName} {employee.lastName}</td>   
                                             <td> {employee.emailId}</td>
                                             <td>
                                             <div>
                                             <input type="checkbox" id="chk1"className="chk11" check={ this.state.check } value={employee.emailId} onChange={ this.handleSeti } />
                                            </div>

                                             </td>
                                            
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                        
                        <div>
                           <Form.Group controlId="formBasicEmail">
                           <Form.Label>Subject</Form.Label>
                           <Form.Control type="text" placeholder="Subject...." onChange={ this.changeSubjectHandler }/>
                    
                            </Form.Group>
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>text</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="text mail...." onChange={ this.changeTextHandler }/>
                            </Form.Group>
                            <div className="text-center">
                            <Button variant="primary" type="submit" style={{marginTop: "20px"}} onClick={this.sendMail}>
                              Send
                            </Button>
                         </div>
                        </div>
                      </div>  
                    </div>    
                   {//   </div>
    }
                      {/* <div className = "card col " style={{marginTop:"10px",marginBottom:"20px",marginLeft:'10px',marginRight:'20px'}}>
                           <h3 className="text-center"style={{marginTop:'10px'}}>Send mail</h3>
                           <div className = "card-body">
                            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={ this.changeEmailHandler } value={this.state.stringArray}/>
                    
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Subject</Form.Label>
                    <Form.Control type="text" placeholder="Subject...." onChange={ this.changeSubjectHandler }/>
                    
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>text</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="text mail...." onChange={ this.changeTextHandler }/>
                </Form.Group>

               <div className="text-center">
                <Button variant="primary" type="submit" style={{marginTop: "20px"}} onClick={this.sendMail}>
                    Submit
                </Button>
                </div>
                </Form>
             </div>
             <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSeBD7aTF7QQN9aPrcx03G9RnuRoDlWBSa56z-QYnAe19a-4veX3GNCWXPnKSOu-0n5pC4pMcEkb3dp/pubhtml?widget=true&amp;headers=false"></iframe>
            </div>  
             */}   
            <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vSeBD7aTF7QQN9aPrcx03G9RnuRoDlWBSa56z-QYnAe19a-4veX3GNCWXPnKSOu-0n5pC4pMcEkb3dp/pubhtml?widget=true&amp;headers=false"></iframe> 
             
            </div>   
            </div>
        )
    }
}
