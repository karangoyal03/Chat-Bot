$(() => {
    const obj = {
        "home": "http://www.smdpc2sd.gov.in/index",
        "manpower":"http://www.smdpc2sd.gov.in/index",
        "publications":"http://www.smdpc2sd.gov.in/index",
        "phds":"http://www.smdpc2sd.gov.in/index",
        "events":"http://www.smdpc2sd.gov.in/index",
        "soc":"http://www.smdpc2sd.gov.in/index",
        "asics":"http://www.smdpc2sd.gov.in/index",
        "smdp-1": "http://www.smdpc2sd.gov.in/smdp1outcome",
        "vlsi design labs":"http://www.smdpc2sd.gov.in/smdp1outcome",
        "smdp-1 project details":"http://www.smdpc2sd.gov.in/smdp1outcome",
        "total outlay":"http://www.smdpc2sd.gov.in/smdp1outcome",
        "duration":"http://www.smdpc2sd.gov.in/smdp1outcome",
        "organisations":"http://www.smdpc2sd.gov.in/smdp1outcome",
        "project outcomes":"http://www.smdpc2sd.gov.in/smdp1outcome",
        "smdp-2": "http://www.smdpc2sd.gov.in/smdp2outcome",
        "major elements":"http://www.smdpc2sd.gov.in/smdp2outcome",
        "objectives of smdp-2":"http://www.smdpc2sd.gov.in/smdp2outcome",
        "smdp-2 project details":"http://www.smdpc2sd.gov.in/smdp2outcome",
        "achievements of smdp-2":"http://www.smdpc2sd.gov.in/smdp2outcome",
        "india chip programme":"http://www.smdpc2sd.gov.in/smdp2outcome",
        "smdp-c2sd": "http://www.smdpc2sd.gov.in/smdp_c2sd",
        "smdp-c2sd vision":"http://www.smdpc2sd.gov.in/smdp_c2sd",
        "smdp-c2sd mission":"http://www.smdpc2sd.gov.in/smdp_c2sd",
        "smdp-c2sd objectives":"http://www.smdpc2sd.gov.in/smdp_c2sd",
        "institutes": "http://www.smdpc2sd.gov.in/clusters",
        "investigators": "http://www.smdpc2sd.gov.in/ciscocis",
        "prsg members": "http://www.smdpc2sd.gov.in/revcomprsg",
        "prof swapna banerjee": "http://www.smdpc2sd.gov.in/revcomprsg",
        "prof v b Chandratre": "http://www.smdpc2sd.gov.in/revcomprsg",
        "shri surendra singh":"http://www.smdpc2sd.gov.in/revcomprsg",
        "prof anshul kumar":"http://www.smdpc2sd.gov.in/revcomprsg",
        "prof g s Visweswaran":"http://www.smdpc2sd.gov.in/revcomprsg",
        "tac members": "http://www.smdpc2sd.gov.in/revcomtac",
        "prof dinesh sharma, professor, iit bombay": "http://www.smdpc2sd.gov.in/revcomtac",
        "gc meity": "http://www.smdpc2sd.gov.in/revcomtac",
        "dr v b Chandratre":"http://www.smdpc2sd.gov.in/revcomtac",
        "rep department of science & technology (dst)":"http://www.smdpc2sd.gov.in/revcomtac",
        "rep research design & standards organisation (rdso)":"http://www.smdpc2sd.gov.in/revcomtac",
        "dr c p ravi kumar":"http://www.smdpc2sd.gov.in/revcomtac",
        "rep vlsi society of india":"http://www.smdpc2sd.gov.in/revcomtac",
        "rep centre for development of telematics (c-dot)":"http://www.smdpc2sd.gov.in/revcomtac",
        "rep indian council of medical research (icmr)":"http://www.smdpc2sd.gov.in/revcomtac",
        "rep programme co-ordination Institute, smdp-c2sd (ceeri, pilani)":"http://www.smdpc2sd.gov.in/revcomtac",
        "chairman prsg-i smdp-c2sd":"http://www.smdpc2sd.gov.in/revcomtac",
        "chairman prsg-ii smdp-c2sd":"http://www.smdpc2sd.gov.in/revcomtac",
        "chairman prsg-iii smdp-c2sd":"http://www.smdpc2sd.gov.in/revcomtac",
        "chairman prsg-iv smdp-c2sd":"http://www.smdpc2sd.gov.in/revcomtac",
        "chairman prsg-v smdp-c2sd":"http://www.smdpc2sd.gov.in/revcomtac",
        "nsc members": "http://www.smdpc2sd.gov.in/revcomnsc",
        "financial advisor meitY":"http://www.smdpc2sd.gov.in/revcomnsc",
        "rep ministry of human resource development":"http://www.smdpc2sd.gov.in/revcomnsc",
        "chairman india electronics & semiconductor association (iesa)":"http://www.smdpc2sd.gov.in/revcomnsc",
        "rep programme co-ordination institute smdp-c2sd (ceeri, pilani)":"http://www.smdpc2sd.gov.in/revcomnsc",
        "instruction enhancement programmes": "http://www.smdpc2sd.gov.in/iep_materials",
        "system level design on platform fpgas": "http://www.smdpc2sd.gov.in/iep_1",
        "mixed signal soc": "http://www.smdpc2sd.gov.in/iep_2",
        "analog mixed signal and rf system design": "http://www.smdpc2sd.gov.in/iep_3",
        "design issues related to sub-micron technologies": "http://www.smdpc2sd.gov.in/iep_4",
        "introduction to analog and digital design": "http://www.smdpc2sd.gov.in/iep_5",
        "mixed signal and rfic design": "http://www.smdpc2sd.gov.in/iep_6",
        "analog ic design": "http://www.smdpc2sd.gov.in/iep_7",
        "high level design to silicon": "http://www.smdpc2sd.gov.in/iep_8",
        "ioT for structural health monitoring": "http://www.smdpc2sd.gov.in/iep_9",
        "international guest faculty lectures": "http://www.smdpc2sd.gov.in/igf_lectures",
        "analog vlsi and mixed signal design": "http://www.smdpc2sd.gov.in/igf_1",
        "short term courses": "http://www.smdpc2sd.gov.in/stc_materials",
        "high Speed Communication Circuits": "http://www.smdpc2sd.gov.in/stc_1",
        "other materials": "http://www.smdpc2sd.gov.in/other_materials",
        "low power low noise, rail to rail fully differential amplifier for class d application": "http://www.smdpc2sd.gov.in/downloads/Other%20Materials/class_D_Amplifier.pdf",
        "low power high speed discrete time mos based parametric amplifier": "http://www.smdpc2sd.gov.in/downloads/Other%20Materials/parametric_amplifier.pdf",
        "power saving at architecture level : a case study of multi-band receiver design": "http://www.smdpc2sd.gov.in/downloads/Other%20Materials/power_saving.pdf",
        "power efficient analog circuit design : a tutorial overview": "http://www.smdpc2sd.gov.in/downloads/Other%20Materials/power_efficient_design.pdf",
        "design techniques for rf subsystem - low noise amplifier": "http://www.smdpc2sd.gov.in/downloads/Other%20Materials/lna_tutorial.pdf",
        "model syllabus": "http://www.smdpc2sd.gov.in/downloads/Model_Syllabus.pdf",
        "10bestdesigns": "http://www.smdpc2sd.gov.in/india_chip_program",
        "timelines for MPW Run": "http://www.smdpc2sd.gov.in/timelines_MPW",
        "selection criteria": "http://www.smdpc2sd.gov.in/selection_criteria",
        "design Submission Form": "http://www.smdpc2sd.gov.in/designform_indiachipprogram",
        "internship intel": "http://www.smdpc2sd.gov.in/intel",
        "1 Year Hardware Engineering And Software Engineering Internships offered by Intel": "http://www.smdpc2sd.gov.in/assets/img/intel-flyer.png",
        "intel eligibility": "http://www.smdpc2sd.gov.in/intel",
        "intel how to apply": "http://www.smdpc2sd.gov.in/intel",
        "internship PoC": "http://www.smdpc2sd.gov.in/ciscocis",
        "internship mentor": "http://www.smdpc2sd.gov.in/mentor",
        "6 Weeks Training Program sponsored by Mentor Graphics Higher Education Program": "http://www.smdpc2sd.gov.in/assets/img/mentor-flyer.pdf",
        "mentor how to apply": "http://www.smdpc2sd.gov.in/mentor",
        "mentor eligibility": "http://www.smdpc2sd.gov.in/mentor",
        "internship nxp": "http://www.smdpc2sd.gov.in/nxp",
        "6/12 Months Hardware Engineer And Software Engineer Internships offered by NXP Semiconductors": "http://www.smdpc2sd.gov.in/assets/img/nxp-flyer.png",
        "nxp eligibility": "http://www.smdpc2sd.gov.in/nxp",
        "nxp how to apply": "http://www.smdpc2sd.gov.in/nxp",
        "vacancy": "http://www.smdpc2sd.gov.in/recruitment",
        "contact": "http://www.smdpc2sd.gov.in/contactus",
        "mrs sunita verma": "http://www.smdpc2sd.gov.in/contactus",
        "mr nishit gupta": "http://www.smdpc2sd.gov.in/contactus"
    }

    const sendBtn = $('#send-btn')
    const msgBox = $("#msg-box")
    const chatbot = $('#chatbot')
    const openBtn = $('#open-btn')
    // const body = $('body')
    const arr = []
    let show = false

    chatbot.hide()

    openBtn.click(() => {
        console.log('openbtn clicked' + show)
        show = true
        chatbot.show()
        openBtn.hide()
    })

    // body.click(() => {
    //     console.log('body clicked' + show)
    //     if (show) {
    //         chatbot.hide()
    //         openBtn.show()
    //     }
    // })

    sendBtn.click(() => {

        const msgInputValue = $('#msg-input').val().toLowerCase()
        $('#msg-input').val('')
        arr.push(`me ${msgInputValue}`)
        refreshMsg()

        if (obj[msgInputValue]) {
            arr.push(`bot ${obj[msgInputValue]}`)
        } else {
            arr.push("err Try something else.")
        }
        setTimeout(() => {
            refreshMsg()
        }, 200)

    })

    function refreshMsg() {

        const msg = arr[arr.length - 1]
        if (msg.startsWith("me")) {
            msgBox.append(`
            <div class="me-msg">
                <div class="ml-auto">
                    ${msg.substring(3)}
                </div>
            </div>`)
        } else if (msg.startsWith("err")) {
            msgBox.append(`
            <div class="bot-msg ml-2">
                ${msg.substring(4)}
            </div>`)
        }
        else {
            msgBox.append(`
            <div class="bot-msg ml-2">
                <a href="${msg.substring(4)}" target="_blank">CLICK HERE TO OPEN</a> 
            </div>`)
        }

    }

})