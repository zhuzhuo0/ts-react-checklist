import React, { Component, ChangeEventHandler } from 'react';
import { editDraftAction } from "./action/index"
import { connect } from 'react-redux';

const mapStateToProps = (storeState: IStoreState) => ({
    draft: storeState.draft
})

// ReturnType<T>。获取函数 T 返回值的类型，这个类型意义很大。
type IStateProps = ReturnType<typeof mapStateToProps>

const mapDispatchToProps = {
    editDraftAction,
}

type IDispatchProps = typeof mapDispatchToProps;

type IProps = IStateProps & IDispatchProps;

class Edit extends Component<IProps> {

    onCheckboxValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.props.editDraftAction({
            ...this.props.draft,
            isChecked: e.target.checked
        })
    }

    onContentValueChange: ChangeEventHandler<HTMLInputElement> = (e) => {
        this.props.editDraftAction({
            ...this.props.draft,
            content: e.target.value
        })
    }

    onSave = () => {
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <div>
                    <input type="checkbox" checked={this.props.draft.isChecked} onChange={this.onCheckboxValueChange} />
                    <input type="text" value={this.props.draft.content} onChange={this.onContentValueChange} />
                </div>
                <div>
                    <button>取消</button>
                    <button onClick={this.onSave}>确定</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
