import React, {ChangeEvent} from "react";

type ProfileStatusType = {
    status: string,
    updateStatus: (status: string) => void
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
            status: e.currentTarget.value
        })
    }
    componentDidUpdate(prevProps: { status: string }, prevState: any) {
        console.log(prevState)
        console.log(prevProps)
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }

    }

    render() {
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

