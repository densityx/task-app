import './normalize.css'
import './App.css'
import {
    Main,
    Heading,
    Button,
    Card,
    Input,
    Pie,
    Container,
    SearchInput,
    Modal,
    ModalContainer, Grid
} from "./components/Common";
import Header from "./components/Header";
import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login";

const TASKS = ['Clean the room', 'Buy some vegetables, chicken & chips', 'Reinstall windows on PC', 'Start to work on new feature'];

function App() {
    return (
        <>
            <Header/>
            </>
            {/*<Main>*/}
                {/*<Card className={'flex flex-column w-296 p-24'}>*/}
                {/*    <Heading>Login</Heading>*/}

                {/*    <Input className={'mt-24'} type={'text'} placeholder={'Id'}/>*/}

                {/*    <Input className={'mt-12'} type={'text'} placeholder={'Name'}/>*/}

                {/*    <Button className={'mt-12 mb-9'}>Login</Button>*/}
                {/*</Card>*/}

                {/*<Card smBorder shadow={'sm'} className={'flex flex-column items-center w-304 p-37'}>*/}
                {/*    <Heading className={'text-center'}>You have no task.</Heading>*/}

                {/*    <Button className={'mt-20 mb-9'}>+ New Task</Button>*/}
                {/*</Card>*/}


                {/*<ModalContainer>*/}
                {/*    <Modal className={'relative w-296 p-24'}>*/}
                {/*        <Heading className={'text-left'}>*/}
                {/*            + New Task*/}
                {/*        </Heading>*/}

                {/*        <Input className={'mt-24 w-full'} placeholder={'Task Name'}/>*/}

                {/*        <Button className={'mt-12 mb-9 block'}>+ New Task</Button>*/}
                {/*    </Modal>*/}
                {/*</ModalContainer>*/}
            // </Main>

            // <Main>
                {/*<Container>*/}
                {/*    <Grid>*/}
                {/*        <Card smBorder shadow={'sm'} className={'px-32 sm:px-24 py-24'}>*/}
                {/*            <Heading>Tasks Completed</Heading>*/}

                {/*            <div className={'mt-4 relative'}>*/}
                {/*                <span className={'stats-done'}>5</span>*/}
                {/*                <span className={'stats-total'}>/ 20</span>*/}
                {/*            </div>*/}
                {/*        </Card>*/}

                {/*        <Card smBorder shadow={'sm'} className={'px-32 sm:px-24 py-24'}>*/}
                {/*            <Heading>Latest Created Tasks</Heading>*/}

                {/*            <ul className={'mt-12 stats-list'}>*/}
                {/*                <li className={'stats-item'}>Clean the room</li>*/}
                {/*                <li className={'stats-item'}>Buy some vegetables, chicken & chips asdfasd sd fs f</li>*/}
                {/*                <li className={'stats-item'}><s>Reinstall windows on PC</s></li>*/}
                {/*            </ul>*/}
                {/*        </Card>*/}

                {/*        <Card smBorder shadow={'sm'}*/}
                {/*              className={'px-32 sm:px-24 py-24 flex items-center justify-center'}>*/}
                {/*            <Pie done={25}/>*/}
                {/*        </Card>*/}
                {/*    </Grid>*/}

                {/*    <div className={'mt-34'}>*/}
                {/*        <div className={'flex flex-column md:flex-row items-center justify-between p-16 sm:p-0'}>*/}
                {/*            <Heading>Tasks</Heading>*/}

                {/*            <div className={'flex flex-column md:flex-row items-center w-full sm:w-auto'}>*/}
                {/*                <div className={'search-input-container mt-8 sm:mt-0'}>*/}
                {/*                    <img className={'search-icon'} src="/src/assets/search-icon.png" alt="Search Icon"/>*/}

                {/*                    <SearchInput placeholder={'Search by task name'}/>*/}
                {/*                </div>*/}

                {/*                <Button className={'sm:ml-12 mt-8 sm:mt-0 block'}>*/}
                {/*                    + New Task*/}
                {/*                </Button>*/}
                {/*            </div>*/}
                {/*        </div>*/}

                {/*        <Card smBorder shadow={'md'} className={'task-list mt-10 px-24'}>*/}
                {/*            {TASKS.map((task, index) => (*/}
                {/*                <div className={'task-item flex justify-between items-start py-24'} key={index}>*/}
                {/*                    <div className={'flex'}>*/}
                {/*                        <label className={'checkbox-container'}>*/}
                {/*                            <input type={'checkbox'} checked={index === 2}/>*/}
                {/*                            <span className={'checkmark'}></span>*/}
                {/*                        </label>*/}

                {/*                        <p className={`ml-12 my-0 ${index === 2 ? 'text-color' : 'text-primary'}`}>*/}
                {/*                            {index === 2 ? (<s>{task}</s>) : task}*/}
                {/*                        </p>*/}
                {/*                    </div>*/}

                {/*                    <div className={'flex items-center'}>*/}
                {/*                        <span className={'inline-flex'}>*/}
                {/*                            <img src="/src/assets/pen-icon.png" alt="Pen Icon"/>*/}
                {/*                        </span>*/}

                {/*                        <span className={'inline-flex ml-16'}>*/}
                {/*                            <img src="/src/assets/trash-icon.png" alt="Trash Icon"/>*/}
                {/*                        </span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            ))}*/}
                {/*        </Card>*/}
                {/*    </div>*/}
                {/*</Container>*/}
            {/*</Main>*/}
        {/*</>*/}
    )
}

export default App
