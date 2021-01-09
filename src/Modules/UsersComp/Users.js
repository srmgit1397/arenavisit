import React , {useState}  from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form,Col,Button} from 'react-bootstrap'
import UserCreat from './UserCreat'


const FBtnStyle={
    padding:'0px',
    width:'55px',
    height:'35px',
    margin:'auto',
    marginRight:'20px',
    borderRadius:'50%' ,
    boxShadow:'3px 3px 3px 2px rgba(0, 0, 0, 0.5)',
}

const UserForm=()=>{
  const [Users , setUsers]=useState([])
  const [selectUser , setSelectUser]=useState({})
  const [editionUser , setEditionUser]=useState({})
  
  const [makeUser , setMakeUser]=useState(false)
  const [readable , setReadable]=useState('readonly')

  const [creatKey , setCreatKey]=useState('')
  const [editKey , setEditKey]=useState('')
  const [delKey , setDelKey]=useState('')
  const [regKey , setRegKey]=useState('disabled')

  
  const newUserForme=()=>{
    setMakeUser(true)
    setEditKey('disabled')
    setDelKey('disabled')
    }

  const creatUser=()=>{
    const userform=document.forms.userForm
    setUsers([...Users,
      {
        userCode:userform.userCode.value+Date.now(),
        fname:userform.fname.value ,
        lname:userform.lname.value,
        educat:userform.educat.value,
        major:userform.major.value,
        tell:userform.tell.value,
        mobile:userform.mobile.value,
        email:userform.email.value,
        password:userform.password.value,
        stat:userform.stat.value,
        city:userform.city.value,
        town:userform.town.value,
        postCode:userform.postCode.value,
        addres:userform.addres.value,
        accessLevel:userform.accessLevel.value
      }
    ])
      // setMakeUser(false)
      // setCreatKey('')
      // setEditKey('')
      // setDelKey('')
      cancelForm()
  }
  
  const setForm=(e)=>{
    let selectCode=e.target.value
    let choosUser=Users.find((item)=>item.userCode===selectCode)
    setSelectUser(choosUser )
    setEditionUser(choosUser)
  }

  const deleteUser=()=>{
    setUsers(Users.filter((item)=>item.userCode!==editionUser.userCode))
    console.log('del',editionUser.userCode)
    }
  
  const editUserForme=()=>{
    setMakeUser(false)
    setCreatKey('disabled')
    setRegKey('')
    setDelKey('disabled')
    setReadable('')
    
  }

  
   let GeteValue=(e)=>{ 
    let itemName=e.target.name;
    let itemValue=e.target.value
    setEditionUser({...editionUser , [itemName]:itemValue} )
   }

  const editUser=()=>{
    setUsers( Users.map((item)=>item.userCode===editionUser.userCode ? editionUser : item)) 
    setSelectUser(editionUser)
    cancelForm()
  }  
      
    const cancelForm=()=>{
      setMakeUser(false)
      setCreatKey('')
      setEditKey('')
      setRegKey('disabled')
      setDelKey('')
      setReadable('readonly')
    }


    return(
    
        <Form name='userForm'  className='p-2 text-right border rounded mt-3 col-md-10  mx-auto alert-primary 'style={{direction:'rtl' }} >
           <h4 className='mx-auto mt-2 alert-success border border-primary rounded text-center col col-md-5  p-1'>فرم اطلاعات کاربری</h4>
           {console.log(Users)}
         {makeUser 
           ? (
            <UserCreat /> 
          ):(
             <>
              <Form.Row className='mt-2 d-flex align-items-end '>
                    <Form.Group as={Col} className='d-flex justify-content-center m-3 ' controlId="formGridUserCode">
                        <Form.Label>کدکاربر</Form.Label>

                        {readable==="readonly"
                        ? <Form.Control as='select' onChange={setForm} type="text" name='userCode' value={editionUser.userCode} placeholder="شناسه " className=' mr-2' >
                            {/* <option key={'item0'} disabled='disabled'>انتخاب کاربر</option> */}
                             { Users.map((item)=><option  key={item.userCode}>{item.userCode}</option>)}
                          </Form.Control>

                        : <Form.Control type="text" name='userCode' onChange={GeteValue} value={editionUser.userCode} placeholder="شناسه " className=' mr-2' />
                        }
                    </Form.Group>
                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridFname">
                        <Form.Label>نام</Form.Label>
                        <Form.Control name="fname" type='text'  value={editionUser.fname} onChange={GeteValue} readOnly={readable} placeholder="نام "  />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridLname">
                        <Form.Label>نام خانوادگی</Form.Label>
                        <Form.Control type='text' name="lname"  value={editionUser.lname} onChange={GeteValue} readOnly={readable} placeholder="نام خانوادگی" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridEducat">
                        <Form.Label>تحصیلات</Form.Label>
                        <Form.Control type='text' name="educat" onChange={GeteValue} value={editionUser.educat} readOnly={readable} placeholder="مقطع تحصیلی" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridMajor">
                        <Form.Label>رشته تحصیلی</Form.Label>
                        <Form.Control type='text' name="major" onChange={GeteValue} value={editionUser.major} readOnly={readable} placeholder="رشته" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridTell">
                        <Form.Label>شماره تلفن ثابت </Form.Label>
                        <Form.Control type='text' name="tell" onChange={GeteValue} value={editionUser.tell} readOnly={readable} placeholder="تلفن" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridMobile">
                        <Form.Label>شماره تلفن همراه</Form.Label>
                        <Form.Control type='text' name="mobile" onChange={GeteValue} value={editionUser.mobile} readOnly={readable}  placeholder="موبایل" />
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto'>
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>رایانامه</Form.Label>
                        <Form.Control name="email" onChange={GeteValue} value={editionUser.email} readOnly={readable} type="email" placeholder="آدرس رایانامه" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>کلمه عبور</Form.Label>
                        <Form.Control name="password" onChange={GeteValue} value={editionUser.password} readOnly={readable} type="password" placeholder="کلمه عبور" />
                    </Form.Group>
                </Form.Row>
              </Form.Row>

        <div className='p-1'>
            <h6 className='row m-auto p-2'>آدرس محل سکونت</h6>
            <Form.Row className='mt-2 '>
              <Form.Row className='m-auto col-md-5'>
                <Form.Group as={Col} controlId="formGridState" >
                  <Form.Label>استان</Form.Label>
                  {readable==="readonly" 
                    ? <Form.Control type='text' name='stat' value={editionUser.stat} readOnly={readable} placeholder="استان"  ></Form.Control>
                    :<Form.Control as="select" name='stat' onChange={GeteValue}  value={editionUser.stat} >
                        <option>آذربایجان</option>
                        <option>همدان</option>
                        <option>اصفهان</option>
                        <option>تهران</option>
                        <option>خراسان</option>
                        <option>...</option>
                    </Form.Control>
                  }
                </Form.Group>

                <Form.Group as={Col} controlId="formGridCity" >
                    <Form.Label>شهر</Form.Label>
                    {readable==="readonly" 
                    ? <Form.Control type='text' name='city'  value={editionUser.city} readOnly={readable}  placeholder="شهر"  ></Form.Control>
                    : <Form.Control as="select" name='city' onChange={GeteValue}  defaultValue={editionUser.city}  >
                        <option>تبریز</option>
                        <option>همدان</option>
                        <option>اصفهان</option>
                        <option>تهران</option>
                        <option>مشهد</option>
                        <option>...</option>
                    </Form.Control>
                    }
                </Form.Group>
            </Form.Row>

                <Form.Row className='m-auto'>
                    <Form.Group as={Col}  controlId="formGridTown"  >
                        <Form.Label> منطقه شهری / شهرک</Form.Label>
                        <Form.Control name='town' onChange={GeteValue} value={editionUser.town} readOnly={readable} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPostCode">
                        <Form.Label>کدپستی</Form.Label>
                        <Form.Control name='postCode' onChange={GeteValue} value={editionUser.postCode} readOnly={readable} />
                    </Form.Group>
                </Form.Row>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
                <Form.Label>آدرس</Form.Label>
                <Form.Control type='text' 
                            as="textarea"
                            name='addres'
                            onChange={GeteValue}
                            readOnly={readable}
                            value={editionUser.addres}
                            placeholder="خیابان اصلی ، خیابان فرعی ، کوچه پلاک ، طبقه ، واحد" 
                            className=' text-right align-top overflow-auto'
                            style={{height:'80px', width:'100%'}} 
                        />
            </Form.Group>
            <Form.Group as={Col} className='d-flex justify-content-center align-items-center' controlId="formGridLeveCheck">
              <Form.Label >نوع دسترسی</Form.Label>
              <Form.Control className='col col-md-3 m-2' name='accessLevel' onChange={GeteValue} value={editionUser.accessLevel} readOnly={readable} />
              <Form.Check type="checkbox" name='checkAll' className='align-self-center ' style={{direction:'ltr'}}  label=" تائیدموارد " />
            </Form.Group>    
        </div>
     </>
    )
  } 
      <div className='mx-auto p-1 d-flex justify-content-center col-md-6 border border-primary rounded mt-2 mb-2'>

          <Button variant="light" onClick={newUserForme} disabled={creatKey} style={FBtnStyle} >جدید</Button>
          <Button variant="success" onClick={editUserForme} style={FBtnStyle} disabled={editKey} >اصلاح</Button>
          { makeUser 
              ? <Button variant="primary" onClick={creatUser} style={FBtnStyle} > ثبت </Button>
              : <Button variant="primary" onClick={editUser} disabled={regKey} style={FBtnStyle} > ثبت </Button>
          }
          <Button variant="danger"  onClick={deleteUser} style={FBtnStyle} disabled={delKey} >حذف</Button>
          <Button variant="info" style={FBtnStyle} onClick={cancelForm} >لغو </Button>

      </div>        
        </Form>
    
    )}

export default UserForm
