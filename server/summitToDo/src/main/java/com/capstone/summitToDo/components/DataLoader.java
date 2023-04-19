package com.capstone.summitToDo.components;

import com.capstone.summitToDo.models.Log;
import com.capstone.summitToDo.models.Munro;
import com.capstone.summitToDo.models.User;
import com.capstone.summitToDo.repositories.LogRepository;
import com.capstone.summitToDo.repositories.MunroRepository;
import com.capstone.summitToDo.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.context.annotation.Profile;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;


@Profile("!test")
@Component
public class DataLoader implements ApplicationRunner {


    @Autowired
    LogRepository logRepository;

    @Autowired
    MunroRepository munroRepository;

    @Autowired
    UserRepository userRepository;

    @Override
    public void run(ApplicationArguments args) {


        Munro munro1 = new Munro("Ben Nevis", 1345);
        munroRepository.save(munro1);
        Munro munro2 = new Munro("Ben Macdui", 1309);
        munroRepository.save(munro2);
        Munro munro3 = new Munro("Braeriach", 1296);
        munroRepository.save(munro3);
        Munro munro4 = new Munro("Cairn Toul", 1291);
        munroRepository.save(munro4);
        Munro munro5 = new Munro("Sgor an Lochain Uaine", 1258);
        munroRepository.save(munro5);
        Munro munro6 = new Munro("Cairn Gorm", 1245);
        munroRepository.save(munro6);
        Munro munro7 = new Munro("Aonach Beag", 1234);
        munroRepository.save(munro7);
        Munro munro8 = new Munro("Aonach Mor", 1221);
        munroRepository.save(munro8);
        Munro munro9 = new Munro("Carn Mor Dearg", 1220);
        munroRepository.save(munro9);
        Munro munro10 = new Munro("Ben Lawers", 1214);
        munroRepository.save(munro10);
        Munro munro11 = new Munro("Beinn a' Bhuird", 1197);
        munroRepository.save(munro11);
        Munro munro12 = new Munro("Carn Eige", 1183);
        munroRepository.save(munro12);
        Munro munro13 = new Munro("Beinn Mheadhoin", 1182);
        munroRepository.save(munro13);
        Munro munro14 = new Munro("Mam Sodhail", 1181);
        munroRepository.save(munro14);
        Munro munro15 = new Munro("Stob Choire Claurigh", 1177);
        munroRepository.save(munro15);
        Munro munro16 = new Munro("Ben More", 1174);
        munroRepository.save(munro16);
        Munro munro17 = new Munro("Ben Avon", 1171);
        munroRepository.save(munro17);
        Munro munro18 = new Munro("Stob Binnein", 1165);
        munroRepository.save(munro18);
        Munro munro19 = new Munro("Beinn Bhrotain", 1157);
        munroRepository.save(munro19);
        Munro munro20 = new Munro("Derry Cairngorm", 1155);
        munroRepository.save(munro20);
        Munro munro21 = new Munro("Lochnagar", 1155);
        munroRepository.save(munro21);
        Munro munro22 = new Munro("Sgurr nan Ceathreamhnan", 1151);
        munroRepository.save(munro22);
        Munro munro23 = new Munro("Bidean nam Bian", 1150);
        munroRepository.save(munro23);
        Munro munro24 = new Munro("Sgurr na Lapaich", 1150);
        munroRepository.save(munro24);
        Munro munro25 = new Munro("Ben Alder", 1148);
        munroRepository.save(munro25);
        Munro munro26 = new Munro("Geal-Charn", 1132);
        munroRepository.save(munro26);
        Munro munro27 = new Munro("Ben Lui", 1130);
        munroRepository.save(munro27);
        Munro munro28 = new Munro("Binnein Mor", 1130);
        munroRepository.save(munro28);
        Munro munro29 = new Munro("An Riabhachan", 1129);
        munroRepository.save(munro29);
        Munro munro30 = new Munro("Creag Meagaidh", 1130);
        munroRepository.save(munro30);
        Munro munro31 = new Munro("Ben Cruachan", 1126);
        munroRepository.save(munro31);
        Munro munro32 = new Munro("Carn nan Gabhar", 1121);
        munroRepository.save(munro32);
        Munro munro33 = new Munro("A' Chraileag", 1120);
        munroRepository.save(munro33);
        Munro munro34 = new Munro("An Stuc", 1118);
        munroRepository.save(munro34);
        Munro munro35 = new Munro("Meall Garbh", 1123);
        munroRepository.save(munro35);
        Munro munro36 = new Munro("Sgor Gaoith", 1118);
        munroRepository.save(munro36);
        Munro munro37 = new Munro("Aonach Beag", 1116);
        munroRepository.save(munro37);
        Munro munro38 = new Munro("Stob Coire an Laoigh", 1118);
        munroRepository.save(munro38);
        Munro munro39 = new Munro("Stob Coire Easain", 1115);
        munroRepository.save(munro39);
        Munro munro40 = new Munro("Monadh Mor", 1113);
        munroRepository.save(munro40);
        Munro munro41 = new Munro("Tom a' Choinich", 1112);
        munroRepository.save(munro41);
        Munro munro42 = new Munro("Carn a' Choire Bhoidheach", 1110);
        munroRepository.save(munro42);
        Munro munro43 = new Munro("Sgurr Mor", 1110);
        munroRepository.save(munro43);
        Munro munro44 = new Munro("Sgurr nan Conbhairean", 1109);
        munroRepository.save(munro44);
        Munro munro45 = new Munro("Meall a' Bhuiridh", 1108);
        munroRepository.save(munro45);
        Munro munro46 = new Munro("Stob a' Choire Mheadhoin", 1105);
        munroRepository.save(munro46);
        Munro munro47 = new Munro("Beinn Ghlas", 1103);
        munroRepository.save(munro47);
        Munro munro48 = new Munro("Beinn Eibhinn", 1102);
        munroRepository.save(munro48);
        Munro munro49 = new Munro("Mullach Fraoch-choire", 1102);
        munroRepository.save(munro49);
        Munro munro50 = new Munro("Creise", 1100);
        munroRepository.save(munro50);
        Munro munro51 = new Munro("Sgurr a' Mhaim", 1099);
        munroRepository.save(munro51);
        Munro munro52 = new Munro("Sgurr Choinnich Mor", 1094);
        munroRepository.save(munro52);
        Munro munro53 = new Munro("Sgurr nan Clach Geala", 1093);
        munroRepository.save(munro53);
        Munro munro54 = new Munro("Bynack More", 1090);
        munroRepository.save(munro54);
        Munro munro55 = new Munro("Stob Ghabhar", 1090);
        munroRepository.save(munro55);
        Munro munro56 = new Munro("Beinn a' Chlachair", 1087);
        munroRepository.save(munro56);
        Munro munro57 = new Munro("Beinn Dearg", 1084);
        munroRepository.save(munro57);
        Munro munro58 = new Munro("Beinn a' Chaorainn", 1082);
        munroRepository.save(munro58);
        Munro munro59 = new Munro("Schiehallion", 1083);
        munroRepository.save(munro59);
        Munro munro60 = new Munro("Sgurr a' Choire Ghlais", 1083);
        munroRepository.save(munro60);
        Munro munro61 = new Munro("Beinn a' Chreachain", 1081);
        munroRepository.save(munro61);
        Munro munro62 = new Munro("Beinn Heasgarnich", 1074);
        munroRepository.save(munro62);
        Munro munro63 = new Munro("Ben Starav", 1078);
        munroRepository.save(munro63);
        Munro munro64 = new Munro("Beinn Dorain", 1076);
        munroRepository.save(munro64);
        Munro munro65 = new Munro("Stob Coire Sgreamhach", 1072);
        munroRepository.save(munro65);
        Munro munro66 = new Munro("Braigh Coire Chruinn-bhalgain", 1070);
        munroRepository.save(munro66);
        Munro munro67 = new Munro("An Socach", 1069);
        munroRepository.save(munro67);
        Munro munro68 = new Munro("Meall Corranaich", 1069);
        munroRepository.save(munro68);
        Munro munro69 = new Munro("Glas Maol", 1068);
        munroRepository.save(munro69);
        Munro munro70 = new Munro("Sgurr Fhuaran", 1067);
        munroRepository.save(munro70);
        Munro munro71 = new Munro("Cairn of Claise", 1064);
        munroRepository.save(munro71);
        Munro munro72 = new Munro("Bidein a' Ghlas Thuill", 1062);
        munroRepository.save(munro72);
        Munro munro73 = new Munro("Sgurr Fiona", 1060);
        munroRepository.save(munro73);
        Munro munro74 = new Munro("Na Gruagaichean", 1056);
        munroRepository.save(munro74);
        Munro munro75 = new Munro("Liathach", 1055);
        munroRepository.save(munro75);
        Munro munro76 = new Munro("Stob Poite Coire Ardair", 1054);
        munroRepository.save(munro76);
        Munro munro77 = new Munro("Toll Creagach", 1054);
        munroRepository.save(munro77);
        Munro munro78 = new Munro("Sgurr a' Chaorachain", 1069);
        munroRepository.save(munro78);
        Munro munro79 = new Munro("Glas Tulaichean", 1051);
        munroRepository.save(munro79);
        Munro munro80 = new Munro("Beinn a' Chaorainn", 1052);
        munroRepository.save(munro80);
        Munro munro81 = new Munro("Geal Charn", 1049);
        munroRepository.save(munro81);
        Munro munro82 = new Munro("Sgurr Fhuar-thuill", 1049);
        munroRepository.save(munro82);
        Munro munro83 = new Munro("Carn an t-Sagairt Mor", 1047);
        munroRepository.save(munro83);
        Munro munro84 = new Munro("Creag Mhor", 1047);
        munroRepository.save(munro84);
        Munro munro85 = new Munro("Ben Wyvis", 1046);
        munroRepository.save(munro85);
        Munro munro86 = new Munro("Chno Dearg", 1046);
        munroRepository.save(munro86);
        Munro munro87 = new Munro("Cruach Ardrain", 1046);
        munroRepository.save(munro87);
        Munro munro88 = new Munro("Beinn Iutharn Mhor", 1045);
        munroRepository.save(munro88);
        Munro munro89 = new Munro("Meall nan Tarmachan", 1044);
        munroRepository.save(munro89);
        Munro munro90 = new Munro("Stob Coir' an Albannaich", 1044);
        munroRepository.save(munro90);
        Munro munro91 = new Munro("Carn Mairg", 1041);
        munroRepository.save(munro91);
        Munro munro92 = new Munro("Sgurr na Cìche", 1040);
        munroRepository.save(munro92);
        Munro munro93 = new Munro("Meall Ghaordaidh", 1039);
        munroRepository.save(munro93);
        Munro munro94 = new Munro("Beinn Achaladair", 1038);
        munroRepository.save(munro94);
        Munro munro95 = new Munro("Carn a' Mhaim", 1037);
        munroRepository.save(munro95);
        Munro munro96 = new Munro("Sgurr a' Bhealaich Dheirg", 1036);
        munroRepository.save(munro96);
        Munro munro97 = new Munro("Gleouraich", 1035);
        munroRepository.save(munro97);
        Munro munro98 = new Munro("Carn Dearg", 1034);
        munroRepository.save(munro98);
        Munro munro99 = new Munro("Am Bodach", 1032);
        munroRepository.save(munro99);
        Munro munro100 = new Munro("Beinn Fhada", 1032);
        munroRepository.save(munro100);
        Munro munro101 = new Munro("Ben Oss", 1029);
        munroRepository.save(munro101);
        Munro munro102 = new Munro("Carn an Righ", 1029);
        munroRepository.save(munro102);
        Munro munro103 = new Munro("Carn Gorm", 1029);
        munroRepository.save(munro103);
        Munro munro104 = new Munro("Sgurr a' Mhaoraich", 1027);
        munroRepository.save(munro104);


        Log log1 = new Log("was easy", "2018-12-09", munro1);
        logRepository.save(log1);
        Log log2 = new Log("was windy", "2019-11-09", munro7);
        logRepository.save(log2);


        User becca = new User("Becca", "BB", "BB", "");
        User daniel = new User("Daniel", "DP", "DP", "");
        User eliza = new User("Eliza", "EP", "EP", "");
        User phil = new User("Phil", "PB", "PB", "");

        phil.addMunroCompleted(munro1);
        phil.addLog(log1);
        daniel.addMunroCompleted(munro7);
        daniel.addLog(log2);


        userRepository.save(becca);
        userRepository.save(daniel);
        userRepository.save(eliza);
        userRepository.save(phil);


    }


}
