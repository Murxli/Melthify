import Icon from "./Icon";


const Home = () => {
    return(
        <div className="app">
            <div className="flex w-4/5 mx-auto justify-center gap-20 item-center">
                <Icon imageUrl={'https://via.placeholder.com/200x200'} title={'chatgpt'}/>
                <Icon imageUrl={'https://via.placeholder.com/200x200'} title={'meet with doctor'}/>
            </div>
        </div>
        
    )
}

export default Home;