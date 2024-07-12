import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { BUSINESS_INFO, INFORMATION, MEMBER_AUTH, PERSONAL_DETAILS } from '../constants/routeNames'
import MemberAuth from '../pages/MemberAuth'
import InformationOutlet from '../pages/InformationOutlet'
import PersonalDetails from '../pages/information/PersonalDetails'
import BusinessInfo from '../pages/information/BusinessInfo'

const AppRoutes = () => {
  return (
  <BrowserRouter>
  <Routes>
    <Route  path={MEMBER_AUTH} element={<MemberAuth/>}>
        <Route path='member-no'/>
    </Route>
    <Route path={INFORMATION} element={<InformationOutlet/>}>
        <Route path={PERSONAL_DETAILS} element={<PersonalDetails/>}/>
        <Route path={BUSINESS_INFO} element={<BusinessInfo/>}/>
    </Route>
  </Routes>
  </BrowserRouter>
  )
}

export default AppRoutes