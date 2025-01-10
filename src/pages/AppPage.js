import React, { useState } from 'react';
import '../styling/style.css';
import '../styling/app.css';

const AppPage = () => {
  const [activeTab, setActiveTab] = useState(1);

  const updateTabs = (tab) => {
    setActiveTab(tab);
  };



  return (
    <div className="AppPage">
      <div className="tab-container">
        <div className="tab" data-tab="1" onClick={() => updateTabs(1)}>Enter Notes</div>
        <div className="tab" data-tab="2" onClick={() => updateTabs(2)}>Review Notes</div>
        <div className="tab" data-tab="3" onClick={() => updateTabs(3)}>Review Claims</div>
        <div className="tab" data-tab="4" onClick={() => { updateTabs(4); }}>Draft!</div>
      </div>

      {activeTab === 1 && (
        <div id="screen1" className="screen1">
          <p className="header">Paste, type, upload, or drag in your notes</p>
          <div className="upload-container">
            <input type="file" id="fileInput" multiple style={{ display: 'none' }} />
            <input type="file" id="folderInput" webkitdirectory="true" directory="true" multiple style={{ display: 'none' }} />
            <button id="selectFilesBtn">Upload Files</button>
            <button id="selectFolderBtn">Upload Folder</button>
            <button id="uploadBtn" disabled>Upload Audio</button>
            <div id="fileList"></div>
          </div>
          <textarea id="notes" placeholder="Write your notes here..." rows="10" cols="50"></textarea>
          <button className="continueBtn" onClick={() => updateTabs(2)}>Continue</button>
        </div>
      )}

      {activeTab === 2 && (
        <div id="screen2">
          <div className="review-notes-container">
            <h2>Review Notes</h2>
            <div className="scrolling-frame">
              <div className="question-answer">
                <h3>Question 1: blah</h3>
                <div className="answer-container">
                  <textarea className="answer-input" rows="3">blah</textarea>
                </div>
              </div>
              <div className="question-answer">
                <h3>Question 2: blah</h3>
                <div className="answer-container">
                  <textarea className="answer-input" rows="3">blah</textarea>
                </div>
              </div>
              <div className="section-break"></div>
              <div className="question-answer">
                <h3>Question 3: blah</h3>
                <div className="answer-container">
                  <textarea className="answer-input" rows="3">blah</textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 3 && (
        <div id="screen3">
          <div id="review-claims" className="screen">
            <h2>Review Claims</h2>
            <div className="claims-container">
              <div className="claims-tree">
                <ul id="claimsTree">
                  {/* Tree structure will be populated by JavaScript */}
                </ul>
              </div>
              <div className="claims-list">
                <button id="showAllClaims" className="show-all-btn">Show All Claims</button>
                <div id="claimsList">
                  {/* Individual claims will be populated by JavaScript */}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === 4 && (
        <div id="screen4" className="screen disabled">
          <div className="draft-buttons">
            <button id="downloadDraft" className="download-btn">Download Draft</button>
            <button id="downloadInsights" className="download-btn">Download Insights</button>
          </div>
          <div id="pdfViewer"></div>
        </div>
      )}
    </div>
  );
};

export default AppPage;