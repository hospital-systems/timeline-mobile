var patients = patients || {};
patients["MrBlonde"] = {
    id: 2,
    name: 'Mrs. Johnson',
    fullname: 'Johnson, Jane',
    gender: 'female',
    date_of_birth: new Date(1948, 6, 12),
    address: '518 Crestview Drive, Beverly Hills, CA',
    phone: '555-0150',
    email: 'jane-johnson@outlook.com'
}
;
patients["MrBrown"] = {
    id: 1,
    name: 'Mr. Smith',
    fullname: 'Smith, John',
    gender: 'male',
    date_of_birth: new Date(1934, 9, 27),
    address: '9764 Jeopardy Lane, Chicago IL',
    phone: '555-0101',
    email: 'john_smith@yahoo.com'
}
;
patients["MrOrange"] = {
    id: 3,
    name: 'Mrs. Major',
    fullname: 'Major, Mary',
    gender: 'female',
    date_of_birth: new Date(1956, 7, 9),
    address: '31 Spooner Street, Quahog, RI',
    phone: '555-0199',
    email: 'mary.major@gmail.com'
}
;
var mrBrownData = mrBrownData || {};
mrBrownData["Allergies"] = [
  {"substance": "Horse serum proteins extract", "RxNorm": 465981},
  {"substance": "Acetamine / Aspirin", "RxNorm": 1007240},
  {"substance": "Ambroxol / Amoxicillin", "RxNorm": 1008081}
]
;
mrBrownData["Encounters"] = [
  {
    "name": ["Medical Lung Center", "Inpatient - 5SOUTH Medical Service"],
    "data": [
      ["Admitting Doctor", "Grag, Jonathan W., MD"],
      ["Diagnoses","Malignant neoplasm of bronchus and lung, unspecified (162.9)"]
    ],
    "admit": "2013-04-26",
    "discharge": "2013-05-13"
  },
  {
    "name": ["Medical VHH Center", "Emergency - ER"],
    "data": [
      ["Attending Doctor",  "Olive, Basil J., MD"],
      ["Diagnoses", "POSS CONCUSSION"]
    ],
    "admit": "2013-10-19",
    "discharge": "2013-10-20"
  },
  {
    "name": ["Fresno Center", "Inpatient - ICU5 Medical Service"],
    "data": [
      ["Attending Doctor", "Feijoa, Peas U., MD"],
      ["Diagnoses", "SOB"]
    ],
    "admit": "2012-05-10",
    "discharge": "2012-10-17"
  }
]
;
mrBrownData["Problems"] = [
  {
    "type": "ch",
    "code": 162.9,
    "diagnoses": "Malignant neoplasm of bronchus and lung (unspecified)",
    "date": "12/12/95",
    "institution": "Lung Medical Center"
  },
  {
    "type": "ch",
    "code": 250.40,
    "diagnoses": "Diabetes with renal manifestations (type II), not stated as uncontrolled",
    "date": "04/15/76",
    "institution": "Camry Hospital"
  },
  {
    "type": "ac",
    "code": 486,
    "diagnoses": "Pneumonia, organism unspecified",
    "date": "03/15/73",
    "institution": "Fresno Hospital"
  },
  {
    "type": "ac",
    "code": 348.31,
    "diagnoses": "Metabolic encephalopathy",
    "date": "04/15/76",
    "institution": "Camry Hospital"
  },
  {
    "type": "ac",
    "code": 486,
    "diagnoses": "Pneumonia, organism unspecified",
    "date": "03/15/73",
    "institution": "Fresno Hospital"
  }
]
;
mrBrownData["TimelineItems"] = [
  {
    id: 1,
    createdAt: new Date(2013, 4, 13, 17, 6),
    type: 'doc',
    name: 'Discharge Summary Note',
    doctor_name: 'Smith, John, MD',
    clinic_name: '',
    data:
    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Admitted:</div>'+
      '<div class=\'col-xs-12\'><p>04/24/2013</p></div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Discharged:</div>'+
      '<div class=\'col-xs-12\'>04/28/2013</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Reason for admission:</div>'+
      '<div class=\'col-xs-12\'>Acute bilateral pulmonary emboli.</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Consultants:</div>'+
      '<div class=\'col-xs-12\'><ul><li>Dr. John  Doe,  heme/oncology</li><li>Dr. Joe Bloggs,cardiology</li><li>Dr. Ashok Kumar, pulmonary.</li></ul></div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Diagnoses at time of discharge:</div>'+
      '<div class=\'col-xs-12\'>'+
      '<ol>'+
      '<li>Trousseau syndrome.</li>'+
      '<li>Acute bilateral pulmonary emboli, Coumadin failure, with right '+
      'lower extremity deep venous thrombosis (DVT) diagnosed 2 weeks '+
      'prior.  The patient was therapeutic on Coumadin at the time of '+
      'diagnosis of pulmonary emboli.</li>'+
      '<li>Adenocarcinoma of the lung.</li>'+
      '<li>Diabetes, type 2.</li>'+
      '<li>Hypertension.</li>'+
      '</ol>'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>History  of  present illness:</div>'+
      '<div class=\'col-xs-12\'>' +
      'This patient is a  78-year-old  male '+
      'with  a history of left lower extremity DVT 2 years prior.  He  had '+
      'been   treated  successfully  with  Coumadin  3  mg   p.o.   daily. '+
      'Overnight,  the  patient developed a right leg  swelling.   He  was '+
      'recently diagnosed with a left hilar lung mass, and bronchoscopy by '+
      'Dr. Kumar proved positive for adenocarcinoma.  He has  been '+
      'scheduled  from one resection by Dr. Roe.  PET  scan  shows  no '+
      'metastases.   Unfortunately, the patient was found with  right  leg '+
      'edema,  swelling, and venous Doppler positive for  DVT,  V/Q  study '+
      'positive  for bilateral PE.  He is admitted to the telemetry  unit, '+
      'Coumadin  failure.   He  is  started on Lovenox.   Dr.  Doe  is '+
      'consulted.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Hospital course:</div>'+
      '<div class=\'col-xs-12\'>' +
      'The patient is dyspneic.  He has tense right  leg '+
      'edema.   Coumadin is discontinued due to Trousseau syndrome due  to '+
      'adenocarcinoma  of  the lung.  Coumadin failure.   The  patient  is '+
      'evaluated  by  Dr. Roe, IVC is filter placed by radiology  from '+
      'left  common femoral.  He developed atrial fibrillation and started '+
      'on  amiodarone.   He  is  recommended for Cardiolite  to  rule  out '+
      'ischemia.    Echo   Doppler  shows  mild  aortic   stenosis,   left '+
      'ventricular  hypertrophy.  Left ventricular  ejection  fraction  is '+
      'within  normal limits.  He is clinically better upon using Lovenox. '+
      'His  Cardiolite  stress  test  shows an  intermediate  response  to '+
      'Lexiscan  infusion.   No chest pain.  There  are  premature  atrial '+
      'contractions noted.  No stress-induced ischemia.  Questionable mild '+
      'septal  wall  motion  abnormality,  possibly  artifactual  ejection '+
      'fraction of 56%.  The patient is cleared for discharge home.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Condition on discharge:</div>'+
      '<div class=\'col-xs-12\'>' +
      'Stable. The patient will pick up Lovenox confirmed in stock through his CVS '+
      'Pharmacy.  The patient is warned about heme-positive stools,  black '+
      'stools,  blood  in  stool,  blood  in  the  urine,  nosebleeds  and '+
      'bleeding, bruising.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Medications on discharge home:</div>'+
      '<div class=\'col-xs-12\'>' +
      'Quinapril 40 mg daily, glipizide  5 '+
      'mg daily, Lipitor 20 mg at bedtime, TriCor 145 mg daily.  Metformin '+
      'is  on  hold  for  3 days post Lexiscan.  Warfarin is  discontinued '+
      'because  with  his  Trousseau syndrome,  Coumadin  is  ineffective. '+
      'Lovenox  110  mg  subcutaneous b.i.d. for a 1  month  supply,  iron '+
      'sulfate 325 mg daily.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Next  blood  draw:</div>'+
      '<div class=\'col-xs-12\'>04/30/2013 with results to Dr. Smith  and  Dr. Doe. </div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Followup:</div>'+
      '<div class=\'col-xs-12\'>Dr. Roe, cardiothoracic surgery, on 05/06/2013, Dr. John Doe, gastroenterology, 04/30/2013.</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Dictated by:</div>'+
      '<div class=\'col-xs-12\'>Jane Roe, P.A.</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12 text-right\'>John Smith, M.D.</div>'+
      '</div>'
  },
  {
    id: 2,
    createdAt: new Date(2013, 3, 28, 12, 33),
    type: 'rad',
    name: 'Nm mpi spec mult rst strs',
    doctor_name: 'Bloggs, Joe, MD',
    clinic_name: '',
    data:
    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Examination:</div>'+
      '<div class=\'col-xs-12\'>78452 - NM MPI SPEC MULT RST STRS</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Clinical history:</div>'+
      '<div class=\'col-xs-12\'>Chest pain.</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Comparison:</div>'+
      '<div class=\'col-xs-12\'>No comparison available.</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Technique:</div>'+
      '<div class=\'col-xs-12\'>' +
      'Following the uneventful intravenous administration of technetium 99m '+
      'Cardiolite, a nuclear cardiac stress test was performed. Following '+
      'the uneventful intravenous administration of Thallium 201, a nuclear '+
      'resting scan was performed. Lexiscan was the stressing agent.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Radiopharmaceuticals</div>'+
      '<div class=\'col-xs-12\'>TC CARDIO DOSE 26.6 MCI 04/28/2013 INTRAVENOUS</div>'+
      '<div class=\'col-xs-12\'>Radiopharmaceuticals</div>'+
      '<div class=\'col-xs-12\'>TL 201 1 MCI 3.7 MCI 04/27/2013 INTRAVENOUS</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Findings:</div>'+
      '<div class=\'col-xs-12\'>' +
      'No reversible defects are seen on stress imaging to suggest '+
      'stress-induced ischemia. There are no fixed defects or transient '+
      'ventricular dilatation. Wall motion analysis reveals mild septal '+
      'wall motion abnormality, possibly artifactual. The left ventricular '+
      'ejection fraction measures 56%. Evaluation of the polar maps '+
      'reconfirms no reversible defects.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Impression:</div>'+
      '<div class=\'col-xs-12\'>' +
      '<ol>'+
      '<li>No stress-induced ischemia.</li>'+
      '<li>Questionable mild septal wall motion abnormality, possibly '+
      'artifactual, with an EF of 56%. These findings can be correlated '+
      'with echocardiography as needed.</li>'+
      '</ol>'+
      'These findings were faxed to the patient\'s floor at 1300 hours on '+
      '04/28/2013.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Dictated datetime:</div>'+
      '<div class=\'col-xs-12\'>04/28/13 13:01</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Principal interpreter:</div>'+
      '<div class=\'col-xs-12\'>Doe, John, MD</div>'+
      '</div>'
  },
  {
    id: 3,
    createdAt: new Date(2013, 3, 28, 6, 40),
    type: 'lab',
    name: 'Immunochemical fecal occult blood test',
    doctor_name: 'Doe, John, MD',
    clinic_name: '',
    data:
    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>iFOB</div>' +
      '<div class=\'col-xs-6 text-right\'><p>POSITIVE</p><p>NEGATIVE</p></div>' +
      '</div>'
  },
  {
    id: 4,
    createdAt: new Date(2013, 3, 28, 6),
    type: 'lab',
    name: 'Complete Blood Count',
    doctor_name: 'Kumar, Ashok, MD',
    clinic_name: '',
    data:
    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>WHITE BLOOD COUNT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>10.1</p><p>4.8-10.8 10^3/uL</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>RED BLOOD COUNT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>3.35</p><p>4.30-5.90 10^6/uL</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>HEMOGLOBIN</div>'+
      '<div class=\'col-xs-6 text-right\'><p>9.3</p><p>13.9-16.3 g/dL</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>HEMATOCRIT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>27.6</p><p>39.0-55.0 %</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>MEAN CORPUSCULAR VOLUME</div>'+
      '<div class=\'col-xs-6 text-right\'><p>82.4</p><p>80.0-94.0 fl</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>MEAN CORPUSCULAR HEMGLOB</div>'+
      '<div class=\'col-xs-6 text-right\'><p>27.9</p><p>29.0-33.0 pg</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>MEAN CORPUSCULAR HGB CONC</div>'+
      '<div class=\'col-xs-6 text-right\'><p>33.9</p><p>32.0-36.0 g/dL</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>RED CELL DISTRIB WIDTH</div>'+
      '<div class=\'col-xs-6 text-right\'><p>14.1</p><p>11.5-14.5 %</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>PLATELET COUNT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>288</p><p>130-450 10^3/uL</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>MEAN PLATELET VOLUME</div>'+
      '<div class=\'col-xs-6 text-right\'><p>8.1</p><p>7.4-10.4 fl</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>NEUTROPHIL PERCENT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>75.0</p><p>50.0-70.0 %</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>NEUTROPHILS</div>'+
      '<div class=\'col-xs-6 text-right\'><p>ABSOLUTE</p><p>H 7.6</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>LYMPHOCYTE PERCENT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>15.3</p><p>20.0-40.0 %</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>MONOCYTE PERCENT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>7.1</p><p>0.0-14.0 %</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>EOSINOPHIL PERCENT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>2.1</p><p>0.0-3.0 %</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>BASOPHIL PERCENT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>0.5</p><p>0.0-1.5 %</p></div>'+
      '</div>'
  },
  {
    id: 5,
    createdAt: new Date(2013, 3, 28, 6),
    type: 'lab',
    name: 'Prothrombin time',
    doctor_name: 'Kumar, Ashok , MD',
    clinic_name: '',
    data:
    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>PRO TIME PATIENT</div>'+
      '<div class=\'col-xs-6 text-right\'><p>16.0</p><p>9.8-12.4 SEC</p></div>'+
      '</div>'+
      '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-6\'>PRO TIME INR</div>'+
      '<div class=\'col-xs-6 text-right\'><p>1.5</p><p>0.9-1.2</p></div>'+
      '</div>'
  },
  {
    id: 6,
    createdAt: new Date(2013, 3, 27, 10, 20),
    type: 'rad',
    name: 'Echocardiography complete',
    doctor_name: 'Bloggs, Joe, MD',
    clinic_name: '',
    data:
    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Examination:</div>'+
      '<div class=\'col-xs-12\'>93306 - echocardiography complete</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Indications:</div>'+
      '<div class=\'col-xs-12\'>acute dvt</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Measurements:</div>'+
      '<div class=\'col-xs-12\'>' +
      '<ul>' +
      '<li>LVDD: 5.5</li>'+
      '<li>LVSD: 3.7</li>'+
      '<li>PW thickness: 1.4</li>'+
      '<li>Septal thickness: 1.4</li>'+
      '<li>Left atrium: 4.8</li>'+
      '<li>Aortic root: 3.9</li>'+
      '<li>LVOT diameter: 2.2</li>'+
      '<li>AV velocity: 2.4 m/s</li>'+
      '<li>AVA: 1.9</li>'+
      '</ul>'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Findings:</div>'+
      '<div class=\'col-xs-12\'>' +
      'The patient has a trileaflet aortic valve. Mitral valve does not '+
      'prolapse. Tricuspid valve is normal. Right and left heart chamber '+
      'volumes are significant for left atrial enlargement. Patient has '+
      'moderate concentric left ventricular hypertrophy. Ejection fraction '+
      'is normal at 60 percent with normal wall motion. There is no '+
      'pericardial effusion. '+
      '</div>'+
      '<div class=\'col-xs-12\'>' +
      'The patient has mild aortic insufficiency with a pressure half-time '+
      'of greater than 500 milliseconds. There is trace mitral '+
      'regurgitation. There is reduced left ventricular compliance. '+
      'Pulmonary artery pressure is estimated at 52 mmHg. Aortic valve '+
      'gradient is 19 mmHg consistent with a calculated aortic valve area of '+
      '1.9 square cm.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Conclusion:</div>'+
      '<div class=\'col-xs-12\'>' +
      '<ol>'+
      '<li>Concentric left ventricular hypertrophy.</li>'+
      '<li>Left atrial enlargement.</li>'+
      '<li>Mild aortic stenosis.</li>'+
      '<li>Mild aortic insufficiency.</li>'+
      '<li>Trace mitral regurgitation.</li>'+
      '<li>Mild to moderate pulmonary hypertension.</li>'+
      '</ol>'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Dictated datetime:</div>'+
      '<div class=\'col-xs-12\'>04/27/13 13:15</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Principal interpreter:</div>'+
      '<div class=\'col-xs-12\'>Bloggs, Joe, MD</div>'+
      '</div>'
  },
  {
    id: 7,
    createdAt: new Date(2013, 3, 25, 12, 57),
    type: 'doc',
    name: 'Consultation Note',
    doctor_name: 'Doe, John, MD',
    clinic_name: '',
    data:
    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Admitting physician:</div>'+
      '<div class=\'col-xs-12\'>John Smith, M.D</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Consulting physician</div>'+
      '<div class=\'col-xs-12\'>John Doe, M.D.</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Reason  for  consultation:</div>'+
      '<div class=\'col-xs-12\'>' +
      'The patient is  a  78-year-old  Caucasian '+
      'gentleman  whom  I  have been asked to see for a  severe  coagulopathy '+
      'ongoing in the setting of a left lung tumor that has been biopsied and '+
      'for   which  Dr.  Roe  has  seen  and  is  contemplating  surgical '+
      'resection.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>History of present illness:</div>'+
      '<div class=\'col-xs-12\'>' +
      'The patient was in hospital here in early '+
      'March.   He  was  found  to  have  left  hilar  tumor.   He  underwent '+
      'bronchoscopy by Dr. Ashok Kumar.  Washings and specimens  from '+
      'that  procedure  were  analyzed  and were  histologically  showing  no '+
      'evidence  of malignancy.  The patient did have a left lung  biopsy  on '+
      '03/28/2013,  and  that was performed on March 28 at this  hospital  by '+
      'Radiology.  Pathology report will be sought. '+
      '<br/>'+
      'The  patient has a history in the past of extensive vascular  disease, '+
      'including  a left carotid surgery here in the past.  He has been  seen '+
      'by  Dr.  Public  in  \'09 for a left femoropopliteal  thrombosis.   The '+
      'patient has developed left lower extremity DVT.  That was clearing up. '+
      'He  went  home  just recently and rapidly developed a severe  dyspneic '+
      'event.   He  developed a right lower extremity extensive DVT,  and  he '+
      'also  has developed pulmonary emboli, I am told.  The patient had been '+
      'on warfarin.  He lately has been changed to Lovenox. '+
      '<br/>'+
      'The  biopsy that was performed on the 28th did show, according to  Dr. '+
      'Kumar,  pathologist,  well-differentiated  adenocarcinoma  of  the '+
      'lung.   The  specimen  was reviewed by Dr. Jane Doe  at  Keck '+
      'Medical  Center, who concurred in diagnosis above.  Immunostains  were '+
      'positive  for  CK7, TTF-1.  Negative for CK20, CK5/6,  calretinin  and '+
      'thyroglobulin.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Social  history:</div>'+
      '<div class=\'col-xs-12\'>' +
      'He  was  born in Lancaster,  PA  in  the  so-called '+
      'Pennsylvania Dutch Country.  He came to California as a child in 1947. '+
      'He  and his wife have been married for 58 years.  They have 2 children '+
      'by  adoption,  a  son  and a daughter.  They have  grandchildren.   He '+
      'reports his wife is "in better health than I am."'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Previous surgeries:</div>'+
      '<div class=\'col-xs-12\'>' +
      'Patient had an accident in a high-school shop and '+
      'lost   his   left  index  finger.   He  has  had  hemorrhoid  surgery, '+
      'transurethral  prostatectomy at this hospital.  The left  carotid  was '+
      'done here.  He has had bilateral cataracts by Dr. Nguyen.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Current  medications:</div>'+
      '<div class=\'col-xs-12\'>' +
      'Include Lovenox 1 mg/kg every 12 hours, TriCor, '+
      'atorvastatin,  glipizide, metformin, quinapril.  He is on  a  sliding-'+
      'scale insulin.  He has Vicodin for pain.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Review of systems:</div>'+
      '<div class=\'col-xs-12\'>' +
      'He has had cataract surgery.  He knows his hearing '+
      'is  diminished.   He is resistant to hearing aids.   Patient  gave  up '+
      'smoking  over  40 years ago.  Alcohol consumption is very  modest,  at '+
      'most  he  said  2-3 a week, and that is now down to 2 or  3  a  month. '+
      'Patient has been diabetic for about 5 years.  No thyroid problems.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Laboratory  data this hospitalization:</div>'+
      '<div class=\'col-xs-12\'>' +
      'WBC is 14,600.  Hemoglobin  is '+
      '11   with   an  MCV  of  81.9,  platelet  count  213,000.   LABORATORY '+
      'COAGULATION STUDIES:  D-dimer is 2946.  Prothrombin time when he  came '+
      'in  on  24th was 40.5, INR 3.7, PTT 36.7.  ABNORMAL CHEMISTRIES:   CO2 '+
      'was  20.  His BUN is 20, creatinine 1.1.  LIVER FUNCTION:  ALT is  86. '+
      'The  rest of the liver panel was normal.  His total bilirubin is  0.5. '+
      'Troponin on the 24th was 0.024, normal.  BNP was 581.  Upper limit  of '+
      'normal  on  scale  is  1800.   LABORATORIES  TODAY:   WBC  is  13,500, '+
      'hemoglobin 10.6, MCV 82.7.  BUN is 28.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Physical examination:</div>'+
      '<div class=\'col-xs-12\'>Vital  signs:</div>'+
      '<div class=\'col-xs-12\'>' +
      'His heartbeat is irregular with abnormal complexes  on '+
      'the monitor.  Temperature 99.4.  Blood pressure 146/59.  O2 saturation '+
      'is 94.'+
      '</div>'+
      '<div class=\'col-xs-12\'>HEENT:</div>'+
      '<div class=\'col-xs-12\'>Patient has no scleral icterus.  He has most of his own teeth.</div>'+
      '<div class=\'col-xs-12\'>Neck:</div>'+
      '<div class=\'col-xs-12\'>Scar over left neck from his carotid surgery.</div>'+
      '<div class=\'col-xs-12\'>Chest:</div>'+
      '<div class=\'col-xs-12\'>No gynecomastia.</div>'+
      '<div class=\'col-xs-12\'>Lungs:</div>'+
      '<div class=\'col-xs-12\'>Reasonably clear.</div>'+
      '<div class=\'col-xs-12\'>Abdomen:</div>'+
      '<div class=\'col-xs-12\'>Moderate pannus.  No palpable liver or spleen.</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Extremities:</div>'+
      '<div class=\'col-xs-12\'>' +
      'Patient has extensive toe-to-groin edema,  right  lower '+
      'extremity,  where he has DVT with typical erythema.  He  has  residual '+
      'mild swelling in contralateral left leg.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Impression:</div>'+
      '<div class=\'col-xs-12\'>' +
      '<ol>'+
      '<li>Patient has adenocarcinoma involving left lung.  He has had PET-CT '+
      'at the MRI Institute.  We do not have the report on that, and there is '+
      'discussion of surgery in the future.</li>'+
      '<li>Patient  has bilateral deep vein thromboses within the  last  2-3 '+
      'weeks,  presently  greater on the right than  on  the  left.   He  had '+
      'history of DVT in the past.</li>'+
      '<li>Patient may have Trousseau syndrome, which is adenocarcinoma with '+
      'multiple  deep  vein thromboses.  Trousseau syndrome is  treated  with '+
      'heparin  only.   Warfarin is basically ineffective.  He  is  presently '+
      'receiving enoxaparin in full dose.</li>'+
      '<li>He  has  peripheral vascular disease documented with  left  lower '+
      'extremity arterial process outlined above as well as left carotid.</li>'+
      '<li>Diabetes mellitus.</li>'+
      '<li>Hypertension.</li>'+
      '<li>Hyperlipidemia.</li>'+
      '<li>Metabolic syndrome.</li>'+
      '</ol>'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12\'>Recommendation:</div>'+
      '<div class=\'col-xs-12\'>' +
      'We will get tumor marker studies.  I agree  with  the '+
      'current regimen for treatment of his right lower extremity DVT.  If we '+
      'are  to proceed with surgical management of the lung, I would strongly '+
      'advise  placement of an IVC filter, stay on the enoxaparin  throughout '+
      'the  preoperative and postoperative period.  If the patient should not '+
      'come  to  surgical resection, he would be a candidate for  alternative '+
      'antitumor  treatment  such  as  systemic chemotherapy  with  radiation '+
      'therapy.   We  will  communicate  with Cardiology,  Thoracic  Surgery, '+
      'Pulmonary regarding all of the above issues. '+
      '<br/>'+
      'I  appreciate  the  opportunity to be involved  in  the  care  of  the '+
      'patient.'+
      '</div>'+
      '</div>'+

    '<div class=\'row item-row\'>'+
      '<div class=\'col-xs-12 text-right\'>JOHN DOE, M.D.</div>'+
      '</div>'
  }
]
;
var timelineWithAnimation = angular.module(
  'timeline-with-animation', [
    'ngRoute',
    'ngSanitize',
    'ngAnimate',
    'shoppinpal.mobile-menu',
    'firebase'
  ]
);

timelineWithAnimation.factory('Settings', function() {
   var title     = 'TakeCare';
   var header    = 'TakeCare';
   var patientId = null;
   return {
     title: function() { return title; },
     setTitle: function(newTitle) { title = newTitle },
     header: function() { return header; },
     setHeader: function(newHeader) { header = newHeader },
     getPatientId: function() { return patientId; },
     setPatientId: function(patient) {
       if (!patient) {
         patientId = null;
       } else {
         patientId = patient.id;
       }
     }
   };
});

var patientsListRegexp  = /\/doctor.html#\/$/;
var timelineListRegexp  = /\/((doctor|patient).html)?#\/(patients\/[0-9]+)?$/;
var timelineItemRegexp  = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?items\/[0-9]+$/;
var problemListRegexp   = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?problem-list$/;
var allergyListRegexp   = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?allergy-list$/;
var encounterListRegexp = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?encounters$/;
var profileRegexp       = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?profile$/;
var chatRegexp          = /\/((doctor|patient).html)?#\/(patients\/[0-9]+\/)?chat$/;

function getPageType(url) {
  if (patientsListRegexp.test(url)) {
    return 'patientsList';
  }
  if (timelineListRegexp.test(url)) {
    return 'timelineList';
  }
  if (timelineItemRegexp.test(url)) {
    return 'timelineItem';
  }
  if (problemListRegexp.test(url)) {
    return 'problemList';
  }
  if (allergyListRegexp.test(url)) {
    return 'allergyList';
  }
  if (encounterListRegexp.test(url)) {
    return 'encounterList';
  }
  if (profileRegexp.test(url)) {
    return 'profile';
  }
  if (chatRegexp.test(url)) {
    return 'chat';
  }
  return 'unrecognized';
}

function getPatientById(id) {
  if (!id) {
    return null;
  }
  return jQuery.grep(patientsArrayFor(patients), function(patient) {
    return patient.id.toString() === id.toString();
  })[0];
}

timelineWithAnimation.controller(
  'RootCtrl',
  function($scope, $rootScope, $location, $spMenu, Settings) {
    $scope.gotoUrlFor = function (path) {
      $location.path(path);
    };
    $scope.$back = function() {
      window.history.back();
    };
    $scope.getPatient = function(id) {
      return getPatientById(id);
    };

    $scope.Settings = Settings;

    $scope.$on(
      '$locationChangeStart',
      function(_, nextPageUrl, currentPageUrl) {

        // Due to menu can not close itself.
        $spMenu.hide();

        var userMoveFrom = getPageType(currentPageUrl);
        var userMoveTo   = getPageType(nextPageUrl);

        if ((userMoveTo === 'patientsList')
            || (userMoveTo === 'timelineList' &&
                userMoveFrom !== 'patientsList')) {
          $scope.animateFlavor = 'move-to-right';
        } else {
          $scope.animateFlavor = 'move-to-left';
        }

        $scope.currentPage = userMoveTo;
      });
  });

function patientsArrayFor(patientsObject) {
  return $.map(patients, function(value, index) {
    return value;
  });
}

timelineWithAnimation.controller('PatientsListCtrl', function($scope, Settings) {
  Settings.setPatientId(null);
  $scope.patients = patientsArrayFor(patients).sort(function(a, b){
    return a.id - b.id;
  });
  var title = 'Patients';
  Settings.setTitle(title);
  Settings.setHeader(title);
});

timelineWithAnimation.controller(
  'TimelineListCtrl',
  function($scope, $route, $routeParams, Settings) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    $scope.items = mrBrownData['TimelineItems'].sort(function(a, b) {
      return b.createdAt - a.createdAt;
    });
    var title = 'Observations';
    Settings.setTitle(title);
    Settings.setHeader(title);
  });

timelineWithAnimation.controller(
  'TimelineItemsCtrl',
  function($scope, $route, $routeParams, Settings) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    $scope.item = jQuery.grep(mrBrownData['TimelineItems'], function(item) {
      return item.id.toString() === $routeParams.itemId.toString();
    })[0];
    Settings.setTitle('Observation: ' + $scope.item.name);
    Settings.setHeader('Observation');
  });

timelineWithAnimation.controller(
  'ProblemListCtrl',
  function($scope, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Problem list';
    Settings.setTitle(title);
    Settings.setHeader(title);
    $scope.items = mrBrownData['Problems'];
  });

timelineWithAnimation.controller(
  'AllergyListCtrl',
  function($scope, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Allergy list';
    Settings.setTitle(title);
    Settings.setHeader(title);
    $scope.items = mrBrownData['Allergies'];
  });

timelineWithAnimation.controller(
  'EncounterListCtrl',
  function($scope, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Encounters';
    Settings.setTitle(title);
    Settings.setHeader(title);
    $scope.items = mrBrownData['Encounters'];
  });

timelineWithAnimation.controller(
  'ProfileCtrl',
  function($scope, Settings, $route, $routeParams) {
    var patient = getPatientById($routeParams.patientId);
    Settings.setPatientId(patient);
    var title = 'Profile';
    Settings.setTitle(title);
    Settings.setHeader(title);
  });

timelineWithAnimation.controller(
  'ChatCtrl',
  function($scope, $firebase, Settings, $route, $routeParams) {
    $scope.patient = getPatientById($routeParams.patientId);
    Settings.setPatientId($scope.patient);
    var title = 'Chat';
    Settings.setTitle(title);
    Settings.setHeader(title);
    var messagesRef = new Firebase("https://resplendent-fire-4689.firebaseio.com/messages");
    $scope.messages = $firebase(messagesRef);

    $scope.addMessage = function() {
      $scope.messages.$add($scope.newMessage);
      $scope.newMessage = {};
    }
  })

timelineWithAnimation.controller('PageUnderConstructionCtrl', function(Settings) {
  var title = 'Page under construction';
  Settings.setTitle(title);
  Settings.setHeader(title);
});

timelineWithAnimation.config([
  '$routeProvider',
  function($routeProvider) {
    'use strict';

    $routeProvider.when('/', {
      templateUrl: '/ng_templates/timeline_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/items/:itemId', {
      templateUrl: '/ng_templates/timeline_item.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/problem-list', {
      templateUrl: '/ng_templates/problem_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/allergy-list', {
      templateUrl: '/ng_templates/allergy_list.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/encounters', {
      templateUrl: '/ng_templates/encounters.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/profile', {
      templateUrl: '/ng_templates/profile.html',
      controller: 'RootCtrl'
    });

    $routeProvider.when('/chat', {
      templateUrl: '/ng_templates/chat.html',
      controller: 'RootCtrl'
    })

    $routeProvider.otherwise({
      templateUrl: '/ng_templates/page_under_construction.html',
      controller: 'RootCtrl'
    });
  }]);

angular.module('timeline-with-animation').run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('/ng_templates/_header_for_doctor.html',
    "<div>{{ Settings.header() }}</div>\n" +
    "<div ng-if=\"getPatient(Settings.getPatientId())\">\n" +
    "  <small>{{ getPatient(Settings.getPatientId()).name }}</small>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/_timeline_item.html',
    "<div class=\"row timeline-item-row\">\n" +
    "  <div class=\"timeline-item-icon-container col-xs-2 col-md-1 text-center\">\n" +
    "    <div class=\"icon fancy-icon\" ng-class=\"'medapp-icon-' + item.type\"></div>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-7 col-md-9 timeline-item-main\">\n" +
    "    <div class=\"timeline-item-title\"><strong>{{item.name}}</strong></div>\n" +
    "    <div class=\"text-muted\">{{item.doctor_name}}</div>\n" +
    "  </div>\n" +
    "  <div class=\"col-xs-3 col-md-2 text-center timeline-item-datetime\">\n" +
    "    <span>\n" +
    "      {{item.createdAt | date: 'MMM, dd'}}\n" +
    "    </span>\n" +
    "    <span class=\"text-muted\">\n" +
    "      {{item.createdAt | date: 'yyyy'}}\n" +
    "    </span>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/allergy_list.html',
    "<div class=\"allergy-list-frame container\">\n" +
    "  <div ng-controller=\"AllergyListCtrl\">\n" +
    "    <div class=\"row item-row\" ng-repeat=\"item in items\">\n" +
    "      <div class=\"col-xs-12\">{{item.substance}}</div>\n" +
    "      <div class=\"col-xs-12 text-muted\">(RxNorm: {{item.RxNorm}})</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/chat.html',
    "<div class=\"chat container\">\n" +
    "  <div ng-controller=\"ChatCtrl\">\n" +
    "\n" +
    "    <div class=\"chat-input\">\n" +
    "      <form role=\"form\" class=\"form-inline\">\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"sender\">Sender</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"sender\" placeholder=\"Sender\" ng-model=\"newMessage.sender\">\n" +
    "        </div>\n" +
    "        <div class=\"form-group\">\n" +
    "          <label for=\"message\">Message</label>\n" +
    "          <input type=\"text\" class=\"form-control\" id=\"message\" placeholder=\"Message\" ng-model=\"newMessage.body\">\n" +
    "        </div>\n" +
    "        <button type=\"submit\" class=\"btn btn-default\" ng-click=\"addMessage()\">Send</button>\n" +
    "      </form>\n" +
    "    </div>\n" +
    "    <div class=\"row item-row\" ng-repeat=\"message in messages\">\n" +
    "      <div class=\"col-xs-12\"><strong>{{message.sender}}:</strong></div>\n" +
    "      <div class=\"col-xs-12 text-right\">{{message.body}}</div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/encounters.html',
    "<div class=\"encounters-frame container\">\n" +
    "  <div ng-controller=\"EncounterListCtrl\">\n" +
    "    <div class=\"row item-row\" ng-repeat=\"item in items\">\n" +
    "      <div class=\"col-xs-12\"><strong>{{item.name[0]}} | {{item.name[1]}}</strong></div>\n" +
    "      <div ng-repeat=\"row in item.data\">\n" +
    "        <div class=\"col-xs-12\">{{row[0]}}:</div>\n" +
    "        <div class=\"col-xs-12\">{{row[1]}}</div>\n" +
    "      </div>\n" +
    "      <div style=\"padding-left: 15px;\">\n" +
    "        <span class=\"fancy-icon medapp-icon-admit\"></span>\n" +
    "        {{item.admit}}\n" +
    "        <span class=\"fancy-icon medapp-icon-discharge\"></span>\n" +
    "        {{item.discharge}}\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/menu.html',
    "<ul class=\"nav navbar-nav\">\n" +
    "  <li><a href=\"#\">Profile</a></li>\n" +
    "  <li><a href=\"#\">Problem list</a></li>\n" +
    "  <li><a href=\"#\">Allergy list</a></li>\n" +
    "  <li><a href=\"#\">Observations</a></li>\n" +
    "  <li><a href=\"#\">Clinical Documents</a></li>\n" +
    "  <li><a href=\"#\">Encounters</a></li>\n" +
    "  <li><a href=\"#\">Chat</a></li>\n" +
    "</ul>\n"
  );


  $templateCache.put('/ng_templates/page_under_construction.html',
    "<div class=\"container page-under-construction-frame\">\n" +
    "  <div ng-controller=\"PageUnderConstructionCtrl\" class=\"alert alert-danger\">\n" +
    "    Not Found\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/patients_list.html',
    "<div class=\"container\" ng-controller=\"PatientsListCtrl\">\n" +
    "  <ul class=\"list-unstyled\">\n" +
    "    <li class=\"patient-item\" ng-repeat=\"patient in patients\">\n" +
    "      <a href=\"#/patients/{{ patient.id }}\">\n" +
    "        {{ patient.name }}\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/problem_list.html',
    "<div class=\"problem-list-frame container\">\n" +
    "  <div ng-controller=\"ProblemListCtrl\">\n" +
    "    <div ng-repeat=\"item in items\" class=\"timeline-item\">\n" +
    "      <div class=\"row timeline-item-row\"  style=\"padding-left: 10px\">\n" +
    "        <div class=\"col-xs-10\">\n" +
    "          <div class=\"timeline-item-title\">{{item.diagnoses}}</div>\n" +
    "          <div class=\"text-muted\">{{item.date}} by {{item.institution}}</div>\n" +
    "        </div>\n" +
    "        <div class=\"col-xs-2 text-center timeline-item-datetime\">\n" +
    "          <div>\n" +
    "            {{item.code}}\n" +
    "          </div>\n" +
    "          <div class=\"text-muted\">\n" +
    "            ICD-9\n" +
    "          </div>\n" +
    "        </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/profile.html',
    "<div class=\"profile-frame container\">\n" +
    "  <div ng-controller=\"ProfileCtrl\">\n" +
    "    <div class=\"col-xs-12\">John, Smith  79y / male (09/27/1934)</div></div>\n" +
    "  </div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/timeline_item.html',
    "<div class=\"timeline-item-frame container\" ng-controller=\"TimelineItemsCtrl\">\n" +
    "  <div ng-include=\"'/ng_templates/_timeline_item.html'\" class=\"timeline-item\"></div>\n" +
    "  <div class=\"timeline-item-data-container col-xs-12\" ng-bind-html='item.data'></div>\n" +
    "</div>\n"
  );


  $templateCache.put('/ng_templates/timeline_list.html',
    "<div class=\"timeline-list-frame container\" ng-controller=\"TimelineListCtrl\">\n" +
    "  <ul class=\"list-unstyled\">\n" +
    "    <li class=\"timeline-item\" ng-repeat=\"item in items\">\n" +
    "      <a class=\"timeline-item-link\"\n" +
    "         href=\"#{{ patient && '/patients/' + patient.id }}/items/{{ item.id }}\">\n" +
    "        <div ng-include=\"'/ng_templates/_timeline_item.html'\"></div>\n" +
    "      </a>\n" +
    "    </li>\n" +
    "  </ul>\n" +
    "</div>\n"
  );

}]);

angular.module('shoppinpal.mobile-menu', [])
    .run(['$rootScope', '$spMenu', function($rootScope, $spMenu){
        $rootScope.$spMenu = $spMenu;
    }])
    .provider("$spMenu", function(){
        this.$get = [function(){
           var menu = {};

           menu.show = function show(){
               var menu = angular.element(document.querySelector('#sp-nav'));
               console.log(menu);
               menu.addClass('show');
           };

           menu.hide = function hide(){
               var menu = angular.element(document.querySelector('#sp-nav'));
               menu.removeClass('show');
           };

           menu.toggle = function toggle() {
               var menu = angular.element(document.querySelector('#sp-nav'));
               menu.toggleClass('show');
           };

           return menu;
        }];
    });