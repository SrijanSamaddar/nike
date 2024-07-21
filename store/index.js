import { proxy } from "valtio";

const state = proxy({
    color: '#fffff',
    logoColor: '#222'
})
export default state;