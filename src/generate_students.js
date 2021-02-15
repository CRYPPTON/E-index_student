import React from 'react';
import Studentlist from './studentlist'
import ReactDom from 'react-dom'

class Gen_stud extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            students_list : [],
            student : {
                    gen_info : {
                    f_name : '',
                    m_name : '',
                    l_name :'',
                    unq_numb_stud : '',
                    index : '',
                    jmbg : '',
                    email : '',
                    phone :'',
                    studies : '',
                    studies_program : '',
                    modul : '',
                    Center : '',
                    avg : '',
                    status : '',
                    plan_prog : '',
                    year_start : '',
                    year_of_studies : '',
                    enrolled_semester : '',
                    espb : ''
                }
            }
        }
    
        this.createStudent = this.createStudent.bind(this)
        this.addStudent = this.addStudent.bind(this)
        this.del = this.del.bind(this)
        this.info = this.info.bind(this)
        this.search_ = this.search_.bind(this)
    }

    createStudent(e){
        e.preventDefault()
        this.setState({
            student :{
                f_name : document.getElementById('fn').value,
                m_name : document.getElementById('mn').value,
                l_name : document.getElementById('ln').value,
                unq_numb_stud : document.getElementById('uq').value,
                index : document.getElementById('ix').value,
                jmbg : document.getElementById('jb').value,
                email : document.getElementById('em').value,
                phone :document.getElementById('ph').value,
                studies : document.getElementById('st').value,
                studies_program :  document.getElementById('sp').value,
                modul :  document.getElementById('md').value,
                Center :  document.getElementById('ce').value,
                avg :  document.getElementById('pr').value,
                status :  document.getElementById('ss').value,
                plan_prog :  document.getElementById('pp').value,
                year_start :  document.getElementById('gu').value,
                year_of_studies :  document.getElementById('gs').value,
                enrolled_semester :  document.getElementById('us').value,
                espb :  document.getElementById('es').value,
            }
        })
    } 

    addStudent(){
        const new_student = this.state.student
        Object.size = function(obj) {
            var size = 0,
              key;
            for (key in obj) {
              if (obj.hasOwnProperty(key)) size++;
            }


            return size;
          };
          
          var len = Object.size(new_student);
          var i; 
 
        const new_st_list = [...this.state.students_list,new_student]
        this.setState({
            students_list : new_st_list
        })
        
      
       for(i = 0; i<len; i++){
           document.getElementsByClassName("input")[i].value = '';
       }

       
     
    }

    info(student){
     
      ReactDom.render(<div>
       <h2 id="h2_info">Informacije</h2>
       <table>
  <tr>
    <th>IME</th>
    <th>PREZIME</th>
    <th>STATUS</th>
  </tr>
  <tr>
    <td>{student.f_name}</td>
    <td>{student.l_name}</td>
    <td>{student.status}</td>
  </tr>
  <tr>
    <th>EMAIL</th>
    <th>PHONE</th>
    <th>INDEKS</th>
  </tr>
  <tr>
    <td>{student.email}</td>
    <td>{student.phone}</td>
    <td>{student.index}</td>
  </tr>
  <tr>
    <th>SMER</th>
    <th>PROSEK</th>
    <th>ESPB</th>
  </tr>
  <tr>
    <td>{student.studies_program}</td>
    <td>{student.avg}</td>
    <td>{student.espb}</td>
  </tr>
  <tr>
    <th>IME RODITELJA</th>
    <th>JBMS</th>
    <th>JMBG</th>
  </tr>
  <tr>
    <td>{student.m_name}</td>
    <td>{student.unq_numb_stud}</td>
    <td>{student.jmbg}</td>
  </tr>
  <tr>
    <th>STUDIJE</th>
    <th>MODUL</th>
    <th>CENTAR</th>
  </tr>
  <tr>
    <td>{student.studies}</td>
    <td>{student.modul}</td>
    <td>{student.Center}</td>
  </tr>
  <tr>
    <th>PLAN PROGRAMA</th>
    <th>GODINA UPISA</th>
    <th>GODINA STUDIRANJA</th>
  </tr>
  <tr>
    <td>{student.plan_prog}</td>
    <td>{student.year_start}</td>
    <td>{student.Center}</td>
  </tr>
  <tr>
    <th>UPISAN SEMESTAR</th>
  </tr>
  <tr>
    <td>{student.enrolled_semester}</td>

  </tr>
  
  
  </table>
      </div>, document.getElementById('info_s'))  
    }
 
      del(jmbg){        
         const filteredStudents = this.state.students_list.filter(stud =>
          stud.jmbg !== jmbg);
           this.setState({
            students_list : filteredStudents
          })
      }

      search_(index){
        const student = this.state.students_list.filter(student=>
          student.index == index)
          this.setState({
            students_list : student
          })
      }

       render(){
        console.log(this.state)
        console.log(this.state.students_list)
        return (
          <div className="createStu"> 
        <form className="form_" onSubmit={this.createStudent} id="form">
            <input className="input" placeholder="Име" id="fn" ></input>
           <input className="input" placeholder="Име Једног Родитеља" id="mn"></input>
           <input className="input"  placeholder="Презиме"  id="ln"></input>

           <input className="input"  placeholder="ЈИБС" id="uq"></input><br></br>
           <input className="input"  placeholder="Број Индекса" id="ix"></input>
           <input className="input"  placeholder="ЈМБГ"  id="jb"></input>
           <input className="input"  placeholder="Електронска Пошта"  id="em"></input>
           <input className="input"  placeholder="Телефон"  id="ph"></input><br></br>

           <input className="input"  placeholder="Студије" id="st"></input>
           <input className="input"  placeholder="Студијски Програм" id="sp"></input>
           <input className="input"  placeholder="Модул"  id="md"></input>
           <input className="input"  placeholder="Центар"  id="ce"></input><br></br>
           <input className="input"  placeholder="Просек"  id="pr"></input>
           <input className="input"  placeholder="Статус"  id="ss"></input>

           <input className="input"  placeholder="План И Програм" id="pp"></input>
           <input className="input"  placeholder="Година Уписа" id="gu"></input>
           <input className="input"  placeholder="Година Студија"  id="gs"></input>
           <input className="input"  placeholder="Уписан Семестар"  id="us"></input>
           <input className="input"  placeholder="ЕСПБ"  id="es"></input>
           <button className="btn" type="submit">create student</button>
        </form>

            

        
           <button className="btn" id="add" onClick={this.addStudent}>Dodaj</button>
           <input  id="index-search" placeholder="Unesite index studenta" ></input>
           <button className="btn" id="search" onClick={()=>this.search_(document.getElementById('index-search').value)}>Nađi</button>
           <div className="studentlist" id="list_s"><pre>
           <Studentlist delete={this.del} moreInfo = {this.info} students_l = {this.state.students_list }> 
        </Studentlist>
           </pre>
          
          </div>
          
          
         <pre>  <div className="" id="info_s"></div></pre>
      
        
          </div>
        
        
        )
    }
}

export default Gen_stud



/* moze se dodati prijava ispita, itd...*/