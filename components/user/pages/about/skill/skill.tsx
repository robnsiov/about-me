import SkillImpl from "./types";

const Skill = ({ children, className, title }: SkillImpl) => {
  return (
    <>
      <div
        className={`p-4 460px:p-3 rounded-xl flex justify-start items-center bg-opacity-30 ${className}`}
      >
        {children}
        <span className="ml-4 dark:text-white text-zinc-900">{title}</span>
      </div>
    </>
  );
};
export default Skill;
