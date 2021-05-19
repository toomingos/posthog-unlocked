import React from 'react'
import { ChatWidget } from '@papercups-io/chat-widget'
import { useValues } from 'kea'
import { userLogic } from 'scenes/userLogic'
import { billingLogic } from 'scenes/billing/billingLogic'
import { preflightLogic } from 'scenes/PreflightCheck/logic'

export function Papercups(): JSX.Element {
    const { user } = useValues(userLogic)
    const { billing } = useValues(billingLogic)
    const { realm, preflight } = useValues(preflightLogic)

    return (
        <ChatWidget
            accountId=""
            title="Welcome to PostHog"
            subtitle="Ask us anything in the chat window below 😊"
            newMessagePlaceholder="Start typing…"
            primaryColor="#5375ff"
            greeting="Hi! Send us a message and we'll respond as soon as we can."
            showAgentAvailability
        />
    )
}
