import React from 'react';

function SideBar() {
  return (
    <div>
      <div className="container-wide bg-white pad-30">
        <div className="pure-g justify-between">
          <div className="pure-u-1 pure-u-md-1-4">
            <h2>Filter</h2>

            <label>Skill Level</label>
            <select>
              <option value="Apprenticeships">Apprenticeships</option>
              <option value="Work Placements">Work Placements</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
