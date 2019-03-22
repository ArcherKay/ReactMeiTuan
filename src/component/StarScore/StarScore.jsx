import '../StarScore/StarScore.scss';
import React from 'react';


/**
 * @constructor <StarScore>
 * @description 评分星星的组件
 */

class StarScore extends React.Component {
    constructor(props) {
        super(props);
    }
    /**
    * @description 渲染得分的星星
    */
    renderScore() {
        let wm_poi_score =this.props.score  || '';
        let score = wm_poi_score.toString(); let scoreArray = score.split('.');

        //满星个数
        let fullstar = parseInt(scoreArray[0]);
        //半星个数
        let halfstar = parseInt(scoreArray[1]) >= 5 ? 1 : 0;
        //0星个数
        let nullstar = 5 - fullstar - halfstar;

        let starjsx = [];
        for (let i = 0; i < fullstar; i++) {
            starjsx.push(<div key={i + 'full'} className="star fullstar"></div>);
        }
        if (halfstar) {
            for (let j = 0; j < halfstar; j++) {
                starjsx.push(<div key={j + 'half'} className="star halfstar"></div>);
            }
        }
        if (nullstar) {
            for (let k = 0; k < nullstar; k++) {
                starjsx.push(<div key={k + 'null'} className="star nullstar"></div>);
            }
        }
        return starjsx;

    }
    render() {
        return (<div className="star-score">{this.renderScore()}
        </div>);
    }
}
export default StarScore;