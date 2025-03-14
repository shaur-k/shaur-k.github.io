import styled from 'styled-components';

export const orange = '#fe7400';
export const purple = '#af2274';
export const red = '#de0125';
export const blue = `#01b6f3`;
export const yellow = `#fffd53`;
export const green = `#00d082`;

export const Heading = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(rgb(var(--highlight-two)), rgb(var(--darkgrey)));
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background: radial-gradient(rgb(var(--highlight-two)), rgb(var(--darkgrey)));
`;

export const SkillContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export const SkillItem = styled.li`
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  background-color: #f5f5f5;
`;

export const ExperienceCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
