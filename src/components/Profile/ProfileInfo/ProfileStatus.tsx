import React, {ChangeEvent} from "react";
import s from "./ProfileInfo.module.css"

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean,
    status: string
}

export class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status:e.currentTarget.value
        })
    }
    componentDidUpdate (prevProps:string,prevState:StateType) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status:this.props.status
            })
        }

    }

    render() {
        console.log("render")
        return (
            <div>
                {
                    !this.state.editMode
                        ? <div><span onDoubleClick={this.activateEditMode}>{this.props.status || "------"}</span></div>
                        :
                        <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                                    value={this.state.status}/></div>
                }
            </div>)
    }
}