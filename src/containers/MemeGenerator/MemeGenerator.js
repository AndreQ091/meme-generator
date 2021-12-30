import React, {Component} from "react";
import './MemeGenerator.css'

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
            mes: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({ allMemeImgs: memes})
            })
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randomMemeIng = this.state.allMemeImgs[randomNum].url
        this.setState({
            randomImage: randomMemeIng,  mes: true
        })
    }

    render() {
        return (
            <div className={'wrapMem'}>
            <div className={'memgen'}>
                <form className={'memgen__form'} onSubmit={this.handleSubmit}>
                    <div className="inputs">
                    <input
                        type="text"
                        name={'topText'}
                        className={'memgen__input'}
                        placeholder={'Текст свеху'}
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        type="text"
                        name={'bottomText'}
                        className={'memgen__input'}
                        placeholder={'Текст снизу'}
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />
                    </div>
                    <button>Generate</button>
                </form>
                <div className="meme_img">
                    <img src={this.state.randomImage} alt=""/>
                    {this.state.mes
                        ? <React.Fragment>
                        <h2 className={'meme__text-top text'}>{this.state.topText}</h2>
                        <h2 className={'meme__text-bottom text'}>{this.state.bottomText}</h2>
                        </React.Fragment>
                        : null
                    }
                </div>
            </div>
            </div>
        )
    }
}

export default MemeGenerator;
