import './App.css';
import React, {Component} from 'react';
import Customer from './components/Customer';
import { Table, TableBody, TableHead, TableRow, TableCell } from '@mui/material';



const customers=[
  {
    'id':1,
    'image':'/img/new-s-1.jpg',
    'name':'이종원',
    'birthday':'961222',
    'gender':"남성",
    'job':"대학생"
  },
  {
    'id':2,
    'image':'/img/new-s-2.jpg',
    'name':'이종숙',
    'birthday':'801215',
    'gender':"여성",
    'job':"전업주부"
  },
  {
    'id':3,
    'image':'/img/new-s-3.jpg',
    'name':'김정수',
    'birthday':'881215',
    'gender':"남성",
    'job':"회사원"
  }
]

class App extends Component{
  render(){
    return (
      <div>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              customers.map(c=>{
                return (<Customer
                  key={c.id}
                  id={c.id}
                  image={c.image}
                  name={c.name}
                  birthday={c.birthday}
                  gender={c.gender}
                  job={c.job}
                />)
              })
            }
          </TableBody>
        </Table>
      </div>
    );
  }
}


export default App;
