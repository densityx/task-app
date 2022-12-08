import {Button, Card, Heading, Input, Main} from "../components/Common";
import {useCallback, useEffect, useState} from "react";
import {performLogin} from "../services/api";
import {selectAuthUser, setUser} from "../store/redux/userSlice";
import {useAppDispatch, useAppSelector} from "../store/hooks";
import {useNavigate} from "react-router-dom";

export default function Login() {
    let navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [id, setId] = useState('038fde7691289d58');
    const [name, setName] = useState('John Doe');
    const authUser = useAppSelector(selectAuthUser)

    useEffect(() => {
        document.title = 'Login to Task App';

        if (authUser?.token !== '') {
            navigate('/dashboard');
        }
    }, [authUser]);

    const handleLogin = useCallback(async () => {
        let {data, status} = await performLogin({
            name,
            key: id,
        });

        dispatch(setUser({
            name: data.token.name,
            token: data.token.token,
            image: data.image,
        }));

        if (status === 200) {
            navigate('/dashboard');
        }
    }, []);

    return (
        <Main loginPage>
            <Card className={'flex flex-column w-296 p-24'}>
                <Heading>Login</Heading>

                <Input
                    className={'mt-24'}
                    type={'text'}
                    placeholder={'Id'}
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <Input
                    className={'mt-12'}
                    type={'text'}
                    placeholder={'Name'}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <Button className={'mt-12 mb-9'} onClick={handleLogin}>
                    Login
                </Button>
            </Card>
        </Main>
    );
}