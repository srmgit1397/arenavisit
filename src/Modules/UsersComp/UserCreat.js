import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Form,Col} from 'react-bootstrap'


const UserCreat=()=>{

  return(
    <>
        <Form.Row className='mt-2 d-flex align-items-end '>
            <Form.Group as={Col} className='d-flex justify-content-center m-3 ' controlId="formGridUserCode">
                <Form.Label>کدکاربر</Form.Label>
                <Form.Control type="text" name='userCode'  placeholder="شناسه " className=' mr-2' />
            </Form.Group>
            <Form.Row className='m-auto'>
                <Form.Group as={Col} controlId="formGridFname">
                    <Form.Label>نام</Form.Label>
                    <Form.Control name="fname" type='text'   placeholder="نام "  />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridLname">
                    <Form.Label>نام خانوادگی</Form.Label>
                    <Form.Control type='text' name="lname"   placeholder="نام خانوادگی" />
                </Form.Group>
            </Form.Row>

            <Form.Row className='m-auto'>
                <Form.Group as={Col} controlId="formGridEducat">
                    <Form.Label>تحصیلات</Form.Label>
                    <Form.Control type='text' name="educat"   placeholder="مقطع تحصیلی" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMajor">
                    <Form.Label>رشته تحصیلی</Form.Label>
                    <Form.Control type='text' name="major"   placeholder="رشته" />
                </Form.Group>
            </Form.Row>

            <Form.Row className='m-auto'>
                <Form.Group as={Col} controlId="formGridTell">
                    <Form.Label>شماره تلفن ثابت </Form.Label>
                    <Form.Control type='text' name="tell"  placeholder="تلفن" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridMobile">
                    <Form.Label>شماره تلفن همراه</Form.Label>
                    <Form.Control type='text' name="mobile"   placeholder="موبایل" />
                </Form.Group>
            </Form.Row>

            <Form.Row className='m-auto'>
                <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Label>رایانامه</Form.Label>
                    <Form.Control name="email"  type="email" placeholder="آدرس رایانامه" />
                </Form.Group>
                <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Label>کلمه عبور</Form.Label>
                    <Form.Control name="password"  type="password" placeholder="کلمه عبور" />
                </Form.Group>
            </Form.Row>

        </Form.Row>

        <div className='p-1'>
            <h6 className='row m-auto p-2'>آدرس محل سکونت</h6>
            <Form.Row className='mt-2 '>
                <Form.Row className='m-auto col-md-5'>
                    <Form.Group as={Col} controlId="formGridState" >
                        <Form.Label>استان</Form.Label>
                        <Form.Control as="select" name='stat' placeholder="استان" >
                            <option>آذربایجان</option>
                            <option>همدان</option>
                            <option>اصفهان</option>
                            <option>تهران</option>
                            <option>خراسان</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridCity" >
                        <Form.Label>شهر</Form.Label>
                        <Form.Control as="select" name='city'  placeholder="شهر" >
                            <option>تبریز</option>
                            <option>همدان</option>
                            <option>اصفهان</option>
                            <option>تهران</option>
                            <option>مشهد</option>
                            <option>...</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>

                <Form.Row className='m-auto'>
                    <Form.Group as={Col}  controlId="formGridTown"  >
                        <Form.Label> منطقه شهری / شهرک</Form.Label>
                        <Form.Control name='town'  />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPostCode">
                        <Form.Label>کدپستی</Form.Label>
                        <Form.Control name='postCode'  />
                    </Form.Group>
                </Form.Row>
            </Form.Row>

            <Form.Group controlId="formGridAddress">
                <Form.Label>آدرس</Form.Label>
                <Form.Control type='text' 
                            as="textarea"
                            name='addres'
                            placeholder="خیابان اصلی ، خیابان فرعی ، کوچه پلاک ، طبقه ، واحد" 
                            className=' text-right align-top overflow-auto'
                            style={{height:'80px', width:'100%'}} 
                        />
            </Form.Group>
            <Form.Group as={Col} className='d-flex justify-content-center align-items-center' controlId="formGridLeveCheck">
              <Form.Label >نوع دسترسی</Form.Label>
              <Form.Control className='col col-md-3 m-2' name='accessLevel' />
              <Form.Check type="checkbox" name='checkAll' className='align-self-center ' style={{direction:'ltr'}}  label=" تائیدموارد " />
            </Form.Group>          
            
        </div>
    </>
)}

export default UserCreat
