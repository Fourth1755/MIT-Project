import { useEffect, useState } from "react";
import NavbarComponent from "./NavbarComponent";
import './HospitalComponent.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";

const HospitalComponent=()=>{
    return(
        <div>   
            <NavbarComponent/>
            <div className="container"> 
                <h1>Hospital</h1>
                  <div className="tap-top-select">
                      <div className="tap-top-select-in">
                        <div className="tap-select">
                            <select class="mdb-select " searchable="Search here..">
                              <option value="1">เลือกจังหวัด</option>
                              <option value="1">กรุงเทพมหานคร</option>
                              <option value="2">นครปฐม</option>
                              <option value="3">กาญจนบุรี</option>
                            </select>
                        </div>
                        <div className="tap-select">
                            <select class="mdb-select" searchable="Search here..">
                              <option value="1" disabled selected>เลือกอำเภอ</option>
                              <option value="1">เมืองนครปฐม</option>
                              <option value="2">กำแพงแสน</option>
                              <option value="3">ดอนตูม</option>
                              <option value="4">นครชัยศรี</option>
                              <option value="5">บางเลน</option>
                              <option value="6">พุทธมณฑล</option>
                              <option value="7">สามพราน</option>
                            </select>
                        </div>
                        <div className="tap-select">
                              <select class="mdb-select" searchable="Search here..">
                                <option value="1" disabled selected>เลือกตำบล</option>
                                <option value="1">โพรงมะเดื่อ</option>
                                <option value="2">ดอนยายหอม</option>
                                <option value="3">ตาก้อง</option>
                                <option value="4">ถนนขาด</option>
                                <option value="5">ทัพหลวง</option>
                                <option value="6">ทุ่งน้อย</option>
                                <option value="7">ธรรมศาลา</option>
                                <option value="8">นครปฐม</option>
                                <option value="9">บ่อพลับ</option>
                                <option value="10">บางแขม</option>
                                <option value="11">บ้านยาง</option>
                                <option value="12">พระปฐมเจดีย์</option>
                                <option value="13">พระประโทน</option>
                                <option value="14">มาบแค</option>
                                <option value="15">ลำพญา</option>
                                <option value="16">วังเย็น</option>
                                <option value="17">วังตะกู</option>
                                <option value="18">สนามจันทร์</option>
                                <option value="19">สระกะเทียม</option>
                                <option value="20">สวนป่าน</option>
                                <option value="21">สามความยเผือก</option>
                                <option value="22">หนองงูเหลือม</option>
                                <option value="23">หนองดินแดง</option>
                                <option value="24">หนองปากโลง</option>
                                <option value="25">ห้วยจระเข้</option>
                                <option value="26">กระตีบ</option>
                                <option value="27">กำแพงแสน</option>
                                <option value="28">ดอนข่อย</option>
                                <option value="29">ทุ่งกระพังโหม</option>
                                <option value="30">ทุ่งขวาง</option>
                                <option value="31">ทุ่งบัว</option>
                                <option value="32">ทุ่งลูกนก</option>
                                <option value="33">รางพิกุล</option>
                                <option value="34">วังน้ำเขียว</option>
                                <option value="35">สระพัฒนา</option>
                                <option value="36">สระสี่มุม</option>
                                <option value="37">หนองกระทุ่ม</option>
                                <option value="38">ห้วยขวาง</option>
                                <option value="39">ห้วยม่วง</option>
                                <option value="40">ห้วยหมอนทอง</option>
                                <option value="41">ดอนพุทรา</option>
                                <option value="42">ดอนรวก</option>
                                <option value="43">บ้านหลวง</option>
                                <option value="44">ลำเหย</option>
                                <option value="45">ลำลูกบัว</option>
                                <option value="46">สามง่าม</option>
                                <option value="47">ห้วยด้วน</option>
                                <option value="48">ห้วยพระ</option>
                                <option value="49">แหลมบัว</option>
                                <option value="50">โคกพระเจดีย์</option>
                                <option value="51">ไทยาวาส</option>
                                <option value="52">ขุนแก้ว</option>
                                <option value="53">งิ้วราย</option>
                                <option value="54">ดอนแฝก</option>
                                <option value="55">ท่ากระชับ</option>
                                <option value="56">ท่าตำหนัก</option>
                                <option value="57">ท่าพระยา</option>
                                <option value="58">นครชัยศรี</option>
                                <option value="59">บางแก้ว</option>
                                <option value="60">บางแก้วฟ้า</option>
                                <option value="61">บางกระเบา</option>
                                <option value="62">บางพระ</option>
                                <option value="63">บางระกำ</option>
                                <option value="64">พะเนียด</option>
                                <option value="65">ลานตากฟ้า</option>
                                <option value="66">วัดแค</option>
                                <option value="67">วัดละมุด</option>
                                <option value="68">วัดสำโรง</option>
                                <option value="69">ศรีมหาโพธิ์</option>
                                <option value="70">ศรีษะทอง</option>
                                <option value="71">สัมปทวน</option>
                                <option value="72">ห้วยพลู</option>
                                <option value="73">ไทรงาม</option>
                                <option value="74">ไผ่หูช้าง</option>
                                <option value="75">คลองนกกระทุง</option>
                                <option value="76">ดอนตูม</option>
                                <option value="77">นราภิรมย์</option>
                                <option value="78">นิลเพชร</option>
                                <option value="79">บัวปากท่า</option>
                                <option value="80">บางเลน</option>
                                <option value="81">บางไทรป่า</option>
                                <option value="82">บางปลา</option>
                                <option value="83">บางภาษี</option>
                                <option value="84">บางระกำ</option>
                                <option value="85">บางหลวง</option>
                                <option value="86">ลำพญา</option>
                                <option value="87">หินมูล</option>
                                <option value="88">คลองโยง</option>
                                <option value="89">มหาสวัสดิ์</option>
                                <option value="90">ศาลายา</option>
                                <option value="91">ไร่ขิง</option>
                                <option value="92">กระทุ่มล้ม</option>
                                <option value="93">คลองใหม่</option>
                                <option value="94">คลองจินดา</option>
                                <option value="95">ตลาดจินดา</option>
                                <option value="96">ทรงคนอง</option>
                                <option value="97">ท่าข้าม</option>
                                <option value="98">ท่าตลาด</option>
                                <option value="99">บางเตย</option>
                                <option value="100">บางกระทึก</option>
                                <option value="101">บางช้าง</option>
                                <option value="102">บ้านใหม่</option>
                                <option value="103">ยายชา</option>
                                <option value="104">สามพราน</option>
                                <option value="105">หอมเกร็ด</option>
                                <option value="106">อ้อมใหญ่</option>
                              </select>
                        </div>
                      </div>
                      <div className='search'>
                            <input 
                            type='search'
                            placeholder="ค้นหา..."
                            
                            />
                        </div>
                  </div>

  <table class="table" style={{backgroundColor:"#FFFFFF"}}>
  <thead className="table-thead">
    <tr>
      <th scope="col">โรงพยาบาล</th>
      <th scope="col">วันที่ให้บริการ</th>
      <th scope="col">จำนวนที่รองรับ/วัน</th>
      <th scope="col">ชนิดวัคซีน</th>
      <th scope="col">การลงทะเบียน</th>
      <th scope="col">เพิ่มประกาศ</th>
    </tr>
  </thead>
  <tbody className="table-tbody">
    <tr>
      <td scope="row">โรงพยาบาลกำแพงแสน</td>
      <td>7-9 กุมภาพันธ์</td>
      <td>500</td>
      <td>ไฟเซอร์,แอสต้า</td>
      <td>walk in</td>
      <td><button type="button" class="btn btn" style={{backgroundColor:"#B00020",color:"#FFFFFF"}}><FontAwesomeIcon icon={faAdd}/>ADD</button></td>
    </tr>
  </tbody>
</table>
<button type="button" className="button-addnew"><FontAwesomeIcon icon={faAdd}/>Add New</button>
            </div>
        </div>
    )
}
export default HospitalComponent;