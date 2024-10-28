import React, { useRef } from 'react';

interface Props {}

const Attendance: React.FC<Props> = () => {
  let fullName = useRef<HTMLInputElement>(null);
  const confirmAttendance = (attendance: boolean) => {
    // fetch
  };

  return (
      <div id='Attendance' className='Attendance'>
        <h3>Confirmar Asistencia</h3>
        <h4>Nombre Completo</h4>
        <input
          type='text'
          ref={fullName}
        />
        <h4>¿Asistiras?</h4>
        <button
          onClick={() => {confirmAttendance(true)}}
        >Si</button>
        <button
          onClick={() => {confirmAttendance(false)}}
        >No</button>
      </div>
  );
}

export default Attendance;
