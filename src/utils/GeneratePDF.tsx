import React, { useState } from 'react';
import { jsPDF } from 'jspdf';

interface DealerInfo {
  have_show_room: boolean;
  dealer_type: string;
  name_of_business: string;
  location: string;
  contact_no: string;
}

interface NextOfKinInfo {
  name: string;
  contact_no: string;
  is_biological: boolean;
}

interface GeneralInfo {
  next_of_kin: string;
  next_of_kin_info: NextOfKinInfo;
}

interface MemberData {
  member_no: string;
  email: string;
  business_type: string;
  dealer_info: DealerInfo;
  general_info: GeneralInfo;
}

const memberData: MemberData = {
  member_no: "MNO0345",
  email: "davidopati70@gmail.com",
  business_type: "dealer",
  dealer_info: {
    have_show_room: true,
    dealer_type: "private",
    name_of_business: "Autolink yards",
    location: "Kasarani along Mwiki road",
    contact_no: "+254799146814"
  },
  general_info: {
    next_of_kin: "parent",
    next_of_kin_info: {
      name: "parent name",
      contact_no: "+254799146814",
      is_biological: true
    }
  }
};

const GeneratePDF: React.FC = () => {
    const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const generatePDF = (preview:boolean) => {
    const doc = new jsPDF();

    // Set title
    doc.setFontSize(22);
    doc.setTextColor(40);
    doc.text('Member Information', 10, 10);

    // Draw a line below the title
    doc.setLineWidth(0.5);
    doc.line(10, 15, 200, 15);

    // Member info
    doc.setFontSize(12);
    doc.text(`Member No:`, 10, 25);
    doc.setFontSize(10);
    doc.text(`${memberData.member_no}`, 50, 25);

    doc.setFontSize(12);
    doc.text(`Email:`, 10, 35);
    doc.setFontSize(10);
    doc.text(`${memberData.email}`, 50, 35);

    doc.setFontSize(12);
    doc.text(`Business Type:`, 10, 45);
    doc.setFontSize(10);
    doc.text(`${memberData.business_type}`, 50, 45);

    // Dealer Info section
    const dealerInfo = memberData.dealer_info;
    doc.setFontSize(14);
    doc.text(`Dealer Info:`, 10, 55);
    doc.setFontSize(12);
    doc.text(`Have Show Room:`, 15, 65);
    doc.setFontSize(10);
    doc.text(`${dealerInfo.have_show_room ? 'Yes' : 'No'}`, 60, 65);

    doc.setFontSize(12);
    doc.text(`Dealer Type:`, 15, 75);
    doc.setFontSize(10);
    doc.text(`${dealerInfo.dealer_type}`, 60, 75);

    doc.setFontSize(12);
    doc.text(`Name of Business:`, 15, 85);
    doc.setFontSize(10);
    doc.text(`${dealerInfo.name_of_business}`, 60, 85);

    doc.setFontSize(12);
    doc.text(`Location:`, 15, 95);
    doc.setFontSize(10);
    doc.text(`${dealerInfo.location}`, 60, 95);

    doc.setFontSize(12);
    doc.text(`Contact No:`, 15, 105);
    doc.setFontSize(10);
    doc.text(`${dealerInfo.contact_no}`, 60, 105);

    // General Info section
    const generalInfo = memberData.general_info;
    doc.setFontSize(14);
    doc.text(`General Info:`, 10, 115);
    doc.setFontSize(12);
    doc.text(`Next of Kin:`, 15, 125);
    doc.setFontSize(10);
    doc.text(`${generalInfo.next_of_kin}`, 60, 125);

    // Next of Kin Info section
    const nextOfKinInfo = generalInfo.next_of_kin_info;
    doc.setFontSize(12);
    doc.text(`Next of Kin Info:`, 15, 135);
    doc.setFontSize(12);
    doc.text(`Name:`, 20, 145);
    doc.setFontSize(10);
    doc.text(`${nextOfKinInfo.name}`, 60, 145);

    doc.setFontSize(12);
    doc.text(`Contact No:`, 20, 155);
    doc.setFontSize(10);
    doc.text(`${nextOfKinInfo.contact_no}`, 60, 155);

    doc.setFontSize(12);
    doc.text(`Is Biological:`, 20, 165);
    doc.setFontSize(10);
    doc.text(`${nextOfKinInfo.is_biological ? 'Yes' : 'No'}`, 60, 165);

  

    // Create PDF blob and URL
    if(preview === true){
        const pdfBlob = doc.output('blob');
    const pdfBlobUrl = URL.createObjectURL(pdfBlob);
    setPdfUrl(pdfBlobUrl);
    }

      // Save the PDF
      doc.save(`${dealerInfo.name_of_business} ${memberData.member_no} member_info.pdf`);
  };

  return (
    <div className='flex gap-10'>
      <button className="inline-block rounded bg-blue-600 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-blue-3 transition duration-150 ease-in-out hover:bg-blue-300 hover:shadow-primary-2 focus:bg-blue-accent-300 focus:shadow-blue-2 focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-blue-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"  onClick={()=>generatePDF(false)}>Download PDF</button>
      {/* <button className="text-blue-700 font-bold"  onClick={()=>generatePDF(true)}>Preview PDF</button> */}
      {pdfUrl && (
        <div>
          <h2>Preview PDF</h2>
          <iframe src={pdfUrl} width="100%" height="500px"></iframe>
          <button onClick={() => setPdfUrl(null)}>Close Preview</button>
        </div>
      )}
    </div>
  );
};

export default GeneratePDF;
