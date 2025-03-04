export type TitleType = "gamedev" | "robotics" | "devops" | "default";

export type TitleDictionary = Record<TitleType, string>;

export interface SkillType {
    name: string;
    level: number;
    tags: TitleType[];
};

export interface ExperienceType {
    title: string;
    company: string;
    location: string;
    startDate: string;
    endDate: string;
    description: string[];
    tags: TitleType[];
    priority: number;
};

export interface ResumeType {
  name: string;
  titles: TitleDictionary;
  languages: SkillType[];
  frameworks: SkillType[];
  softwares: SkillType[];
  operatingSystems: SkillType[];
  experiences: ExperienceType[];
  projects: ExperienceType[];
};

export const resumeData: ResumeType = {
  name: "Shaurya Kumar",
      titles: {
          gamedev: "Game and Engine Developer",
          robotics: "Robotics Engineer",
          devops: "DevOps and Platform Engineer",
          default: "Software Engineer"
      },
      languages: [
          { name: "Modern C++(17-23)", level: 5, tags: ["robotics", "devops", "gamedev", "default"] },
          { name: "Embedded C", level: 3, tags: ["robotics"] },
          { name: "Python", level: 5, tags:["robotics", "devops", "gamedev", "default"]},
          { name: "C#", level: 3, tags:["devops", "gamedev"] },
          { name: "TypeScript", level: 4, tags:["devops"] },
          { name: "Rust", level: 4, tags:["robotics", "gamedev", "default"] },
          { name: "SQL", level: 3, tags:["devops", "default"] },

      ],
      frameworks: [
          { name: "ROS 2", level: 5, tags: ["robotics"] },
          { name: "Yocto Project", level: 3, tags: ["robotics", "devops"] },
          { name: "GitHub Actions", level: 4, tags: ["devops"] },
          { name: "GitLab CI/CD", level: 4, tags: ["devops"] },
          { name: "Docker", level: 5, tags: ["robotics", "devops", "gamedev", "default"] },
          { name: "ONNX", level: 4, tags: ["robotics", "gamedev"] },
          { name: "React", level: 3, tags: ["gamedev"] },
          { name: "MoveIt", level: 4, tags: ["robotics"] },
          { name: "Ansible", level: 3, tags: ["devops"] },
          { name: "OpenCV", level: 4, tags: ["robotics"] },
          { name: "OpenGL", level: 3, tags: ["gamedev"] },
          { name: "Vulkan", level: 3, tags: ["gamedev"] },
          { name: "Nav2", level: 4, tags: ["robotics"] },
          { name: "PyTorch", level: 4, tags: ["robotics"] },
      ],
      softwares: [
          { name: "Unity", level: 4, tags: ["robotics", "gamedev"] },
          { name: "Unreal Engine 5", level: 3, tags: ["gamedev"] },
          { name: "MoveIt Pro", level: 5, tags: ["robotics"] },
          { name: "VSCode", level: 5, tags: ["robotics", "gamedev", "devops", "default"] },
          { name: "Zed", level: 5, tags: ["robotics", "gamedev", "devops", "default"] },
      ],
      operatingSystems: [
          { name: "Windows", level: 4, tags: ["robotics", "gamedev", "devops", "default"] },
          { name: "Embedded Linux", level: 5, tags: ["robotics", "gamedev", "devops", "default"] },
          { name: "macOS", level: 3, tags: ["robotics", "gamedev", "devops", "default"] },
          { name: "Debian & Ubuntu", level: 5, tags: ["robotics", "gamedev", "devops", "default"] },
          { name: "Fedora", level: 5, tags: ["robotics", "gamedev", "devops", "default"] },
      ],
      experiences: [
        {
          title: "Robotics Engineer - Support",
          company: "PickNik Inc.",
          location: "Boulder, CO",
          startDate: "2024-09",
          endDate: "Present",
          description: [
          ],
          tags: ["robotics", "gamedev", "devops", "default"],
          priority: 1
        },
        {
          title: "Software Engineer Intern",
          company: "Opentrons Labworks, Inc.",
          location: "Brooklyn, NY",
          startDate: "2023-06",
          endDate: "2023-09",
          description: [
          ],
          tags: ["robotics", "gamedev", "devops", "default"],
          priority: 1
        },
        {
          title: "NA Competition Lead and Game Designer",
          company: "RoboMaster NA 501c3",
          location: "Remote",
          startDate: "2024-05",
          endDate: "Present",
          description: [
          ],
          tags: ["robotics", "gamedev"],
          priority: 0
        },
        {
          title: "Software Engineer Intern",
          company: "Opentrons Labworks, Inc.",
          location: "Brooklyn, NY",
          startDate: "2023-06",
          endDate: "2023-09",
          description: [
          ],
          tags: ["robotics", "gamedev"],
          priority: 0
        }
      ],
      projects: [
        {
          title: "Project Name",
          company: "ABC Company",
          location: "San Francisco, CA",
          startDate: "2020-01-01",
          endDate: "2022-12-31",
          description: [
          ],
          tags: ["default"],
          priority: 1
        },
      ],
  };
