import React from 'react';

function Studentlist(props){
    const st_list = props.students_l
    const list_st_gen = st_list.map(student =>
        {
            return <div className="list" key={student.jmbg}>
                <p className="id_student">{"Br. Indeksa :"+student.index+" Ime i prezime :"+student.f_name+" "+student.m_name+". "+student.l_name+" Status : "+student.status}</p>
                <button className="btn" id="del" type="button" onClick={()=>props.delete(student.jmbg)}>Izbriši</button>
                <button className="btn" id="inf" type="button" 
                onClick={()=> props.moreInfo(student) }
                
                >Infor.</button>
            </div>
    })

    return (
        <div className="">
            {list_st_gen}  
        </div>
    )
}

export default  Studentlist

