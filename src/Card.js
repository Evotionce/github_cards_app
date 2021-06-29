
import React from 'react';

class Card extends React.Component {

    render() {
        const profile = this.props;

        return (
            <div className="github-profile" style={{ margin: "1rem" }}>
                <img src={profile.avatar_url} width="50px" />
                <div className="info" style={{ display: "inline-block", marginLeft: 10 }}>
                    <div className="name" style={{ fontSize: "125%" }}>{profile.login}</div>
                    <div className="company">{profile.url}</div>
                </div>
            </div>
        );
    }
}

export default Card;