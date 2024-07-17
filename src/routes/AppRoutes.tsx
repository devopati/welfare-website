import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BUSINESS_INFO, INFORMATION, MEMBER_AUTH, NEXT_OF_KIN, PERSONAL_DETAILS, VERIFICATION } from '../constants/routeNames'
import MemberAuth from '../pages/MemberAuth'
import InformationOutlet from '../pages/InformationOutlet'
import PersonalDetails from '../pages/information/PersonalDetails'
import BusinessInfo from '../pages/information/BusinessInfo'
import OtpVerification from '../pages/OtpVerification'
import MainPage from '../pages/admin/MainPage'
import NextOfKinInfo from '../pages/information/NextOfKinInfo'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    {/* <Route  path={MEMBER_AUTH} element={<MainPage/>}> */}
    <Route  path={MEMBER_AUTH} element={<MemberAuth/>}>
        <Route path='member-no'/>
    </Route>
    <Route path={INFORMATION} element={<InformationOutlet/>}>
        <Route path={VERIFICATION} element={<OtpVerification/>}/>
        <Route path={PERSONAL_DETAILS} element={<PersonalDetails/>}/>
        <Route path={BUSINESS_INFO} element={<BusinessInfo/>}/>
        <Route path={NEXT_OF_KIN} element={<NextOfKinInfo/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes