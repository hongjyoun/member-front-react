import Dashboard from '@/pages/dashboard/Dashboard';
import { Route } from 'react-router-dom';

export const MANAGE_EMPLOYEE = [
  { label: '도움관리', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
  { label: '도움임용', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
  { label: '직원관리', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
  { label: '직원임용', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
]

export const MANAGE_MEMBER = [
  { label: '회원검색', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
  { label: '회원가입', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
  { label: '회원상세', path: '/manage/people/helpers', element: <Dashboard/>, visible: false},
  { label: '특별회원', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
  { label: '참메일계정', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
]

export const MANAGE_CENTER = [
  { label: '센터관리', path: '/manage/group/centers', element: <Dashboard/>, visible: true},
  { label: '센터등록', path: '/manage/group/centers/new', element: <Dashboard/>, visible: false},
  { label: '산하단체', path: '/manage/people/helpers', element: <Dashboard/>, visible: true},
]

export const MANAGE_ROUTES = () => {
  const employeeRoutes = MANAGE_EMPLOYEE.map(v=> <Route key={v.path} path={v.path} element={v.element}/>)
  const memberRoutes = MANAGE_MEMBER.map(v=> <Route key={v.path} path={v.path} element={v.element}/>)
  const centerRoutes = MANAGE_CENTER.map(v=> <Route key={v.path} path={v.path} element={v.element}/>)
  return [...employeeRoutes, ...memberRoutes, ...centerRoutes];
}