import { Slot } from "expo-router"
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';


export default function layout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{ title: 'Inicio',
                    tabBarIcon: ({ color, size }) => <Ionicons name="home-outline" color={color} size={size} />
                }}
            />
             <Tabs.Screen
                name='about'
                options={{ title: 'sobre',
                    tabBarIcon: ({ color, size }) => <Ionicons name="bulb-outline" color={color} size={size} />
                }}
            />
             <Tabs.Screen
                name='settings'
                options={{ title: 'configurações',
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} />
                }}
            />
            <Tabs.Screen
                name='informação'
                options={{ title: 'info',
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} />
                }}
            />              
            <Tabs.Screen
                name='Funções'
                options={{ title: 'Funções',
                    tabBarIcon: ({ color, size }) => <Ionicons name="settings-outline" color={color} size={size} />
                }}
            />

        </Tabs>
    )
}
