type Props = {
  className: string;
};

function PlayerTrackerIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path d="M271.2,512l240.6-196L271.2,119.3v121.3C171.9,235.3,83,178,38.1,88.3L0.2,0v106c0,152.1,120.8,276.8,271,284.6L271.2,512z" />
    </svg>
  );
}

function DiceIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 509.792 509.792"
      className={className}
    >
      <path d="m406.932 201.423-123.281 213.529 192.946-30.954z" />
      <path d="m317.878 29.906 95.4 117.33 53.91-31.126z" />
      <path d="m226.141 414.952-123.28-213.529-69.666 182.575z" />
      <path d="m131.615 151.619h246.562l-123.281-151.619z" />
      <path d="m126.067 181.619 128.829 223.138 128.829-223.138z" />
      <path d="m269.896 447.542v62.25l149.31-86.204z" />
      <path d="m428.278 173.216 53.91 141.283v-172.408z" />
      <path d="m96.514 147.236 95.4-117.33-149.31 86.204z" />
      <path d="m81.514 173.216-53.91-31.125v172.408z" />
      <path d="m239.896 447.542-149.31-23.954 149.31 86.204z" />
    </svg>
  );
}

function PCShieldIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 428.2 428.2"
      className={className}
    >
      <path
        d="M393.8,110.2c-0.5-11.3-0.5-22-0.5-32.8c0-8.7-6.7-15.4-15.4-15.4c-64,0-112.6-18.4-153.1-57.9c-6.1-5.6-15.4-5.6-21.5,0
	c-40.4,39.4-89.1,57.9-153.1,57.9c-8.7,0-15.4,6.7-15.4,15.4c0,10.8,0,21.5-0.5,32.8c-2,107.5-5.1,255,174.6,316.9l5.1,1l5.1-1
	C398.4,365.2,395.8,218.2,393.8,110.2z"
      />
    </svg>
  );
}

function NPCShieldIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 428.16 428.16"
      className={className}
    >
      <path
        d="M393.8,110.208c-0.512-11.264-0.512-22.016-0.512-32.768c0-8.704-6.656-15.36-15.36-15.36
			c-64,0-112.64-18.432-153.088-57.856c-6.144-5.632-15.36-5.632-21.504,0C162.888,43.648,114.248,62.08,50.248,62.08
			c-8.704,0-15.36,6.656-15.36,15.36c0,10.752,0,21.504-0.512,32.768c-2.048,107.52-5.12,254.976,174.592,316.928l5.12,1.024
			l5.12-1.024C398.408,365.184,395.848,218.24,393.8,110.208z M201.8,259.2c-3.072,2.56-6.656,4.096-10.752,4.096h-0.512
			c-4.096,0-8.192-2.048-10.752-5.12l-47.616-52.736l23.04-20.48l37.376,41.472l82.944-78.848l20.992,22.528L201.8,259.2z"
      />
    </svg>
  );
}

function PaintCanIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
    >
      <path d="m12 2.75c4.149 0 7.25 1.452 7.25 2.75 0 .46-.419.964-1.18 1.418-.506.303-.82.871-.82 1.482v8.1c0 .414-.337.75-.75.75s-.75-.336-.75-.75v-6.61c0-.495-.211-.969-.579-1.299-.321-.289-.739-.447-1.168-.447-.063 0-.125.003-.188.01-.298.032-.604.056-.918.073-.908.047-1.647.83-1.647 1.744v1.529c0 .46-.466.811-.886.738-.548-.102-1.101.04-1.512.384-.383.319-.602.79-.602 1.292v.586c0 .414-.337.75-.75.75s-.75-.336-.75-.75v-6.1c0-.611-.314-1.179-.82-1.482-.761-.454-1.18-.958-1.18-1.418 0-1.298 3.101-2.75 7.25-2.75m8.75 2.75c0-2.423-3.762-4.25-8.75-4.25s-8.75 1.827-8.75 4.25c0 .109.012.228.03.35-.01.05-.03.097-.03.15v12.789c0 .273.048.509.148.724.893 1.905 4.43 3.237 8.602 3.237s7.709-1.332 8.603-3.24c.099-.213.147-.448.147-.721v-12.789c0-.053-.02-.1-.03-.15.018-.122.03-.241.03-.35" />
    </svg>
  );
}

function TrashIcon({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
    >
      <path d="m459.125 37.25h-117.188l-9.18-18.262c-3.966-7.963-12.1-12.995-20.996-12.988h-111.62c-8.88-.034-16.998 5.011-20.898 12.988l-9.18 18.262h-117.188c-8.629 0-15.625 6.996-15.625 15.625v31.25c0 8.629 6.996 15.625 15.625 15.625h406.25c8.629 0 15.625-6.996 15.625-15.625v-31.25c0-8.629-6.996-15.625-15.625-15.625z" />
      <path d="m89.203 462.055c1.547 24.7 22.029 43.942 46.777 43.945h240.04c24.748-.003 45.231-19.245 46.777-43.945l20.703-331.055h-375z" />
    </svg>
  );
}

export {
  PlayerTrackerIcon,
  DiceIcon,
  PCShieldIcon,
  NPCShieldIcon,
  PaintCanIcon,
  TrashIcon,
};
