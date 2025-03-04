import { resumeData, TitleType, SkillType, ExperienceType } from "./data/resumedata";
import { ExperienceCard, ExperienceContainer, SkillContainer, SkillItem, SkillList, Title } from "./styling";
import React, { useState } from 'react';
const Resume = () => {
  const [title, setTitle] = useState<TitleType>('default');

  const titleChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setTitle(event.target.value as TitleType);
  };

  const filterData = (datas: Array<SkillType> | Array<ExperienceType>) => {
    return datas.filter(data => data.tags.includes(title));
  };

  const filteredLanguages = filterData(resumeData.languages) as SkillType[];
  const filteredFrameworks = filterData(resumeData.frameworks) as SkillType[];
  const filteredSoftwares = filterData(resumeData.softwares) as SkillType[];
  const filteredExperiences = filterData(resumeData.experiences) as ExperienceType[];
  const filteredProjects = filterData(resumeData.projects) as ExperienceType[];
  const filteredOperatingSystems = filterData(resumeData.operatingSystems) as SkillType[];

  return (
    <>
      <div className="resume-container">
        <Title>
          <h2>{resumeData.titles[title]}</h2>
        </Title>
        <h3>Skills</h3>
        <SkillContainer>
          <SkillList>Languages
            {filteredLanguages.map(language => (
              <SkillItem>{language.name}</SkillItem>
            ))}
          </SkillList>
          <SkillList>Frameworks
            {filteredFrameworks.map(framework => (
              <SkillItem>{framework.name}</SkillItem>
            ))}
          </SkillList>
          <SkillList>Softwares
            {filteredSoftwares.map(software => (
              <SkillItem>{software.name}</SkillItem>
            ))}
          </SkillList>
          <SkillList>Operating Systems
            {filteredOperatingSystems.map(os => (
              <SkillItem>{os.name}</SkillItem>
            ))}
          </SkillList>
        </SkillContainer>
        <ExperienceContainer>Experience
            {filteredExperiences.map(experience => (
              <ExperienceCard>{experience.title}</ExperienceCard>
            ))}
        </ExperienceContainer>
        <ExperienceContainer>Projects
            {filteredProjects.map(project => (
              <ExperienceCard>{project.title}
                <p>{project.company} : {project.startDate} - {project.endDate}</p>
                <p>{project.description}</p>
              </ExperienceCard>
            ))}
        </ExperienceContainer>
      </div>
      <select onChange={titleChangeHandler} defaultValue={title}>
        {Object.keys(resumeData.titles).map((key) => (
          <option key={key} value={key}>
            {resumeData.titles[key as keyof typeof resumeData.titles]}
          </option>
        ))}
      </select>
    </>
  )
}

export default Resume;
