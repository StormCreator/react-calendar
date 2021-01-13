import React from 'react';
import { useState } from 'react';
import { TeamsColors } from "./teamColors";



export function useTeamColor(teamName: string):string{

    const [teamColor, setTeamColor] = useState('Frontend');

    console.log(Object.keys(TeamsColors));

    return teamColor;
}

export default useTeamColor;