import React, { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import { ADMIN, BUSINESS_INFO, CONFIRM_NUMBER, INFORMATION, MEMBER_AUTH, NEXT_OF_KIN, PERSONAL_DETAILS, THANK_YOU, VERIFICATION } from '../constants/routeNames'
import MemberAuth from '../pages/MemberAuth'
import InformationOutlet from '../pages/InformationOutlet'
import PersonalDetails from '../pages/information/PersonalDetails'
import BusinessInfo from '../pages/information/BusinessInfo'
import OtpVerification from '../pages/OtpVerification'
// import MainPage from '../pages/admin/MainPage'
import NextOfKinInfo from '../pages/information/NextOfKinInfo'
import ThankYou from '../pages/information/ThankYou'
import MainPage from '../pages/admin/MainPage'
import ConfirmNumber from '../pages/information/ConfirmNumber'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route  path={MEMBER_AUTH} element={<MemberAuth/>}>
        <Route path='member-no'/>
    </Route>

    <Route path={INFORMATION} element={<InformationOutlet/>}>
        <Route  path={ADMIN} element={<MainPage/>}/>
        <Route path={VERIFICATION} element={<OtpVerification/>}/>
        <Route path={PERSONAL_DETAILS} element={<PersonalDetails/>}/>
        <Route path={CONFIRM_NUMBER} element={<ConfirmNumber/>}/>
        <Route path={BUSINESS_INFO} element={<BusinessInfo/>}/>
        <Route path={NEXT_OF_KIN} element={<NextOfKinInfo/>}/>
        <Route path={THANK_YOU} element={<ThankYou/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes