import {createAppContainer,createSwitchNavigator} from 'react-navigation'

import auth from '../src/screen/auth'
import task from '../src/screen/taskList'

const mainRoutes = {
    Auth : {
        name : 'Auth',
        screen : auth,
    },
    Home : {
        name : 'Home',
        screen : task,
    }
}

const mainNavigator = createSwitchNavigator(mainRoutes,{
    initialRouteName : 'Auth'
})
export default createAppContainer(mainNavigator)