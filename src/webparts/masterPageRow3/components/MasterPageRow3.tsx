import * as React  from 'react'
import './MasterPageRow3.scss'
import Trainings from './Trainings'
import Tasks from './Tasks'
import { IMasterPageRow3Props } from './IMasterPageRow3Props'
import OpinionPoll from './Opinion Poll'

const MasterPageRow3 = (props:IMasterPageRow3Props) => {
  return (
    <div className="Containers3" >
    <div><Trainings description={props.description} isDarkTheme={props.isDarkTheme} environmentMessage={props.environmentMessage} hasTeamsContext={props.hasTeamsContext} userDisplayName={props.userDisplayName} context={props.context} ListName={props.ListName}/></div>
     <div><Tasks/></div> 
    <div><OpinionPoll description={props.description} isDarkTheme={props.isDarkTheme} environmentMessage={props.environmentMessage} hasTeamsContext={props.hasTeamsContext} userDisplayName={props.userDisplayName} context={props.context} ListName={props.ListName}/></div> 

    </div>
  )
}

export default MasterPageRow3