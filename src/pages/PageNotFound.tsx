import {Card, Heading, Main} from "../components/Common";
import {useEffect} from "react";

export default function PageNotFound() {
    useEffect(() => {
        document.title = 'Page Not Found';
    }, []);

    return (
        <Main>
            <Card className={'w-304 p-37'}>
                <Heading>
                    404: Page Not Found
                </Heading>
            </Card>
        </Main>
    )
}