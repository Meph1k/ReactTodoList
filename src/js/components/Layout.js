import React from "react"
import { connect } from "react-redux"

import { fetchUser } from "../actions/userActions"
import { fetchTweets } from "../actions/tweetsActions"

@connect((store) => {
  return {
    user: store.user.user,
    userFetched: store.user.fetched,
    tweets: store.tweets.tweets,
  };
})
export default class Layout extends React.Component {
  componentWillMount() {
    this.props.dispatch(fetchUser())
    this.fetchTweets();
  }

  fetchTweets() {
    this.props.dispatch(fetchTweets())
  }

  render() {
    const { user, tweets } = this.props;

    const mappedTweets = tweets.map(tweet => <li>{tweet.text}</li>)

    return <div>
      {this.props.children}
    </div>
  }
}
