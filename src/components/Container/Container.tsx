import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: center;
    row-gap: 32px;
    column-gap: 32px;
    width: 100%;
    height: 100%;
    max-width: 1200px;
    margin: 60px auto;
    padding: 1rem 0;
}`;

export const ContainerChild = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: flex-end;
    justify-content: center;
    row-gap: 16px;
    column-gap: 16px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
}`;