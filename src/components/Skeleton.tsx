import {Card, Container, LoadingBar} from "./Common";
import React from "react";

export default function Skeleton() {
    return (
        <Container>
            <Card shadow={'sm'} className={'p-24 mt-10'}>
                <LoadingBar className={'mt-8 animate-pulse'} width={100}/>
                <LoadingBar className={'mt-8 animate-pulse'} width={90}/>
                <LoadingBar className={'mt-8 animate-pulse'} width={80}/>
                <LoadingBar className={'mt-8 animate-pulse'} width={70}/>
            </Card>
        </Container>
    )
}