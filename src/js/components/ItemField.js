import React, {propTypes} from "react"
import { connect } from "react-redux"
import Item from "./Item";

require("../../styles/equipment.scss");

@connect((store) => {
    return {
        user: store.user.user,
        userFetched: store.user.fetched,
        tweets: store.tweets.tweets,
    };
})
export default class ItemField extends React.Component {


    render() {
        return <div><Item class={this.props.className}/></div>
    }
}
