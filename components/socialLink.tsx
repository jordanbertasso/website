import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface Props {
  link: string;
  icon: any;
}

export const SocialLink: React.FC<Props> = ({ link, icon }) => {
  return (
    <div>
      <a
        style={{ fontSize: 0 }}
        href={link}
        target='_blank'
        rel='noopener noreferrer'
      >
        {link}
        <FontAwesomeIcon
          icon={icon}
          className='w-[2.5rem] sm:w-[3rem] sm:hover:w-[4rem] transition-all ease-in-out duration-150 text-white'
        />
      </a>
    </div>
  );
};
