export function initHudBackground() {
  const sections = [
    { selector: ".manifesto-section", direction: "direction-ltr" },
    { selector: ".journey-section", direction: "direction-rtl" },
    { selector: ".bento-section", direction: "direction-ltr" },
  ];

  const codeSnippet = String.raw`
<span class="kw-pink">package</span> com.sentinel.vault.core.security;                                                  <span class="comment">// [CIPHER_SUITE: AES-256-GCM] [KEY_LEN: 256] [SHIFT_LEFT_CI: PASSED] [STAGE: PRODUCTION]</span>
<span class="kw-cyan">import</span> java.security.SecureRandom; <span class="kw-pink">import</span> javax.crypto.Cipher; <span class="kw-pink">import</span> javax.crypto.SecretKey;  <span class="comment">// [CSPRNG_ENTROPY: /dev/urandom] [ZERO_DISK_ENFORCEMENT: ACTIVE] [MEMORY_HYGIENE: STRICT]</span>
<span class="kw-cyan">import</span> java.util.Arrays; <span class="kw-pink">import</span> java.util.UUID; <span class="kw-pink">import</span> java.time.Instant;                        <span class="comment">// [HEAP_ISOLATION: VOLATILE_SEGMENT] [TENANT_BOUNDARY: MULTI_TENANT_LOGICAL_ISOLATION]</span>
<span class="kw-cyan">import</span> org.springframework.context.<span class="kw-blue">ApplicationContextInitializer</span>;                               <span class="comment">// [SPRING_SPI: MAP_PROPERTY_SOURCE_POSITION_ZERO] [PRECEDENCE: HIGHEST_PREFERENCE]</span>
<span class="kw-cyan">import</span> org.springframework.core.env.<span class="kw-blue">ConfigurableEnvironment</span>;                                    <span class="comment">// [BOOTSTRAP_INTERCEPTOR: ACTIVE] [FAIL_FAST_SAFEGUARD: ZERO_LEAKAGE_TOLERANCE]</span>

<span class="annotation">@ShiftLeftSecurityGate(sastEngine = "Semgrep", secretScanner = "TruffleHog", sca = "Snyk")</span>      <span class="comment">// [OWASP_TOP_10_MITIGATED] [BOLA_CHECK: RIGID_UUID_BINDING] [TLS_V1_3_TRANSPORT_ENFORCED]</span>
<span class="annotation">@ZeroDiskPersistence(enforceVolatileRam = true, activeBufferWipe = true)</span>                        <span class="comment">// [ZERO_DISK_FOOTPRINT] [NO_SSD_PERSISTENCE] [NO_SWAP_LEAKAGE] [MEMORY_OVERWRITE_ACTIVE]</span>
<span class="kw-pink">public final class</span> <span class="kw-blue">SentinelSecurityCoreEngine</span> <span class="kw-pink">implements</span> <span class="kw-blue">ApplicationContextInitializer</span> {        <span class="comment">// [SYS.v2.4_SENTINEL_SECURITY_ENGINE] [SESSION_INTEGRITY: NONCE_BOUND] [STATELESS]</span>

    <span class="kw-pink">private static final int</span> GCM_TAG_LENGTH = <span class="num">128</span>; <span class="kw-pink">private static final int</span> IV_SIZE_BYTES = <span class="num">12</span>;  <span class="comment">// [TAG_BITS: 128] [AES_GCM_AUTH_VERIFIED] [INTEGRITY_CHECK: TAMPER_PROOF_AUTHENTICATION]</span>
    <span class="kw-pink">private final</span> <span class="kw-blue">SecureRandom</span> secureEntropy = <span class="kw-pink">new</span> <span class="kw-blue">SecureRandom</span>();                              <span class="comment">// [FIPS_140_COMPLIANT_PRNG] [HIGH_ENTROPY_POOL: /dev/urandom] [RESEED_CYCLES: 0x1000]</span>

    <span class="annotation">@SecurityAudit(action = "VOLATILE_RAM_DECRYPTION", zeroDisk = true)</span>                         <span class="comment">// [EXECUTION_CONTEXT: VOLATILE_RAM] [TIME_IN_MEMORY_MAX: 12ms] [AUDIT_APPEND: ACTIVE]</span>
    <span class="kw-pink">public byte</span>[] <span class="fn">decryptInVolatileRam</span>(<span class="kw-cyan">byte</span>[] cipherData, <span class="kw-blue">SecretKey</span> masterKey, <span class="kw-cyan">byte</span>[] iv) {     <span class="comment">// [ENCRYPTED_INPUT_STREAM: AES_GCM_PAYLOAD] [KEY_HANDLE: PROTECTED] [IV: 96-BIT_UNIQUE]</span>
        <span class="kw-cyan">byte</span>[] decryptedBuffer = <span class="kw-pink">null</span>;                                                          <span class="comment">// [ALLOCATE_TEMPORARY_RAM_BUFFER] [NEVER_PERSIST_TO_DISK] [ZERO_INITIALIZED: 0x00]</span>
        <span class="kw-pink">try</span> {                                                                                   <span class="comment">// [SECURITY_BOUNDARY_ENTER] [STACK_PROTECTION: ACTIVE] [THREAD_LOCAL_ISOLATION]</span>
            <span class="kw-blue">Cipher</span> cipher = <span class="kw-blue">Cipher</span>.<span class="fn">getInstance</span>(<span class="str">"AES/GCM/NoPadding"</span>);                            <span class="comment">// [CIPHER_SUITE: AES_256_GCM_NO_PADDING] [AUTHENTICATED_ADDITIONAL_DATA: VALIDATED]</span>
            cipher.<span class="fn">init</span>(<span class="kw-blue">Cipher</span>.DECRYPT_MODE, masterKey, <span class="kw-pink">new</span> <span class="kw-blue">GCMParameterSpec</span>(GCM_TAG_LENGTH, iv)); <span class="comment">// [IV_BOUND_TO_RECORD: NONCE_REUSE_PROTECTION] [MAC_AUTHENTICATION_TAG: VERIFIED]</span>
            decryptedBuffer = cipher.<span class="fn">doFinal</span>(cipherData);                                       <span class="comment">// [PAYLOAD_CLEARED_IN_MEMORY] [BYTES_DECRYPTED: VARIABLE] [ZERO_DISK_ENFORCED]</span>
            <span class="kw-pink">return</span> <span class="kw-blue">Arrays</span>.<span class="fn">copyOf</span>(decryptedBuffer, decryptedBuffer.length);                      <span class="comment">// [RETURN_RAM_SEGMENT] [DEFENSIVE_COPY_ENFORCED] [NO_STRING_POOL_INTERNING]</span>
        } <span class="kw-pink">finally</span> {                                                                             <span class="comment">// [MANDATORY_CLEANUP_PHASE] [MEMORY_OVERWRITE_GUARANTEE] [ACTIVE_VOLATILE_WIPE]</span>
            <span class="kw-pink">if</span> (decryptedBuffer != <span class="kw-pink">null</span>) { <span class="kw-blue">Arrays</span>.<span class="fn">fill</span>(decryptedBuffer, (<span class="kw-cyan">byte</span>) <span class="num">0</span>); }            <span class="comment">// [ZERO_FILL_BUFFER_WIPE: Arrays.fill(buf, (byte) 0)] [ELIMINATES_RAM_DUMP_EXPOSURE]</span>
            <span class="kw-pink">if</span> (iv != <span class="kw-pink">null</span>) { <span class="kw-blue">Arrays</span>.<span class="fn">fill</span>(iv, (<span class="kw-cyan">byte</span>) <span class="num">0</span>); }                                      <span class="comment">// [ERASE_INITIALIZATION_VECTOR_BYTES] [ENTROPY_RECYCLED] [BUFFER_ZEROIZED]</span>
        }                                                                                       <span class="comment">// [SECURITY_BOUNDARY_EXIT] [MEMORY_INTEGRITY_VERIFIED: CLEAN]</span>
    }

    <span class="annotation">@TenantIsolationAudit(enforceBOLAProtection = true)</span>                                         <span class="comment">// [BOLA_MITIGATION: BROKEN_OBJECT_LEVEL_AUTHORIZATION] [API1_2023_OWASP_DEFENSE]</span>
    <span class="kw-pink">public boolean</span> <span class="fn">validateTenantBoundary</span>(<span class="kw-blue">UUID</span> tenantId, <span class="kw-blue">UUID</span> authenticatedUserUUID) {          <span class="comment">// [TENANT_ISOLATION_ASSERTION] [CROSS_TENANT_IDOR_PROTECTION_GATEWAY]</span>
        <span class="kw-pink">if</span> (tenantId == <span class="kw-pink">null</span> || !tenantId.<span class="fn">equals</span>(authenticatedUserUUID)) {                       <span class="comment">// [IDOR_ATTEMPT_DETECTED] [IMMEDIATE_SESSION_REVOCATION] [RAISE_SECURITY_ALERT]</span>
            <span class="fn">recordImmutableAuditLog</span>(<span class="str">"BOLA_BREACH_ATTEMPT"</span>, authenticatedUserUUID, <span class="kw-blue">Instant</span>.<span class="fn">now</span>()); <span class="comment">// [IMMUTABLE_AUDIT_LOG_APPEND] [SOURCE_IP: CAPTURED] [NON_REPUDIATION_ENFORCED]</span>
            <span class="kw-pink">throw new</span> <span class="kw-blue">SecurityAccessDeniedException</span>(<span class="str">"Cross-tenant access violation detected"</span>); <span class="comment">// [HALT_PIPELINE] [TRANSACTION_ROLLED_BACK] [ZERO_TRUST_ENFORCED]</span>
        }
        <span class="kw-pink">return true</span>;                                                                            <span class="comment">// [TENANT_ISOLATION_ASSERTED] [PERMITS_SCOPED_DATABASE_LOOKUP_ONLY]</span>
    }

    <span class="annotation">@SpringSPIBootstrapInjection(precedence = "HIGHEST")</span>                                        <span class="comment">// [SPRING_BOOT_SPI_BOOTSTRAP] [BOOTSTRAP_CONTEXT_INTERCEPTOR] [PREVENT_PLAIN_TEXT]</span>
    <span class="kw-pink">public void</span> <span class="fn">injectBootstrapEnvironment</span>(<span class="kw-blue">ConfigurableEnvironment</span> env, <span class="kw-blue">Map</span>&lt;<span class="kw-blue">String</span>, <span class="kw-blue">Object</span>&gt; sec) { <span class="comment">// [INJECT_DECRYPTED_VOLATILE_MAP] [IN_MEMORY_ONLY] [NO_ENV_FILE_PERSISTENCE]</span>
        env.<span class="fn">getPropertySources</span>().<span class="fn">addFirst</span>(<span class="kw-pink">new</span> <span class="kw-blue">MapPropertySource</span>(<span class="str">"sentinelVaultProperties"</span>, sec));<span class="comment">// [INSERTION_AT_INDEX_0: MAXIMUM_SPRING_PRECEDENCE] [ZERO_DISK_CONFIG]</span>
        <span class="fn">recordImmutableAuditLog</span>(<span class="str">"CONFIG_INJECTED_VOLATILE_RAM"</span>, <span class="kw-pink">null</span>, <span class="kw-blue">Instant</span>.<span class="fn">now</span>());           <span class="comment">// [AUDIT_TRAIL: ENVIRONMENT_LOADED] [PROMETHEUS_METRIC_INCREMENT: SUCCESS]</span>
    }
}
  `;

  sections.forEach((item) => {
    const sec = document.querySelector(item.selector);
    if (!sec) return;

    sec.style.position = "relative";

    const existing = sec.querySelector(".java-code-overlay");
    if (existing) existing.remove();

    const matrixContainer = document.createElement("div");
    matrixContainer.className = `java-code-overlay ${item.direction}`;

    const codeBlock = document.createElement("pre");
    codeBlock.className = "java-code-content";
    codeBlock.innerHTML = codeSnippet;

    matrixContainer.appendChild(codeBlock);
    sec.appendChild(matrixContainer);
  });
}
